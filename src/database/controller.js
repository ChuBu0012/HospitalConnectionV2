import patientModel from "@/model/patient";
import { getSession } from "next-auth/react";

export async function getDatas(req, res) {
    try {
        const findDatas = await patientModel.find({});
        return res.status(200).json(findDatas);

    } catch (error) {
        return res.status(404).json({ error: "อ่านข้อมูลไม่สำเร็จ" });
    }
}
export async function getData(req, res) {
    try {

        const { id } = req.query;
        if (id) {
            const findData = await patientModel.findOne({ _id: id });
            return res.status(200).json(findData);
        } else {
            return res.status(404).json({ error: "ไม่มีข้อมูลนี้" });
        }
    } catch (error) {
        return res.status(404).json({ error: "อ่านข้อมูลไม่สำเร็จ" });
    }
}

export async function createData(req, res) {
    try {
        const {
            idcard,
            prefix,
            name,
            sex,
            age,
            birthday,
            address,
            subdistrict,
            district,
            province,
            zipcode,
            blood,
            allergic,
            tel,
            email,
        } = req.body;
        const { day, month, year } = birthday;

        if (!idcard) {
            return res.status(404).json({ error: "กรุณากรอกเลขบัตรประจำตัวประชาชน" });
        } else if (!prefix) {
            return res.status(404).json({ error: "กรุณาเลือกคำนำหน้า" });
        } else if (!name) {
            return res.status(404).json({ error: "กรุณากรอกชื่อ-นามสกุล" });
        } else if (!sex) {
            return res.status(404).json({ error: "กรุณาเลือกเพศ" });
        } else if (!age) {
            return res.status(404).json({ error: "กรุณากรอกอายุ" });
        }

        const createData = await patientModel.create({
            idcard,
            prefix,
            name,
            sex,
            age,
            birthday: { day, month, year },
            address,
            subdistrict,
            district,
            province,
            zipcode,
            blood,
            allergic,
            tel,
            email,
        });

        return res.status(200).json(createData);
    } catch (error) {
        return res.status(404).json({ error: "บันทึกข้อมูลไม่สำเร็จ", data: error });
    }
}

export async function deleteData(req, res) {
    try {
        const { id } = req.query;
        if (id) {
            await patientModel.deleteOne({ _id: id });
            return res.status(200).json({ deleted: "ลบข้อมูลสำเร็จ" });
        } else {
            const result = await patientModel.deleteMany({});
            return res
                .status(200)
                .json({ deleted: "ลบข้อมูลสำเร็จ", deletedCount: result.deletedCount });
        }
    } catch (error) {
        return res.status(404).json({ error: "ลบข้อมูลไม่สำเร็จ" });
    }
}

export async function updateData(req, res) {
    try {
        const { id } = req.query;
        const {
            idcard,
            prefix,
            name,
            sex,
            age,
            birthday,
            address,
            subdistrict,
            district,
            province,
            zipcode,
            blood,
            allergic,
            tel,
            email,
        } = req.body;
        const { day, month, year } = birthday;

        if (!idcard) {
            return res.status(404).json({ error: "กรุณากรอกเลขบัตรประจำตัวประชาชน" });
        } else if (!prefix) {
            return res.status(404).json({ error: "กรุณาเลือกคำนำหน้า" });
        } else if (!name) {
            return res.status(404).json({ error: "กรุณากรอกชื่อ-นามสกุล" });
        } else if (!sex) {
            return res.status(404).json({ error: "กรุณาเลือกเพศ" });
        } else if (!age) {
            return res.status(404).json({ error: "กรุณากรอกอายุ" });
        }

        const updateData = await patientModel.findByIdAndUpdate(
            { _id: id },
            {
                idcard,
                prefix,
                name,
                sex,
                age,
                birthday: { day, month, year },
                address,
                subdistrict,
                district,
                province,
                zipcode,
                blood,
                allergic,
                tel,
                email,
            }
        );

        return res.status(200).json(updateData);
    } catch (error) {
        return res.status(404).json({ error: "แก้ไขข้อมูลไม่สำเร็จ", data: error });
    }
}

export async function searchData(req, res) {
    const { idcard, tel, name } = req.query;

    const query = {};

    if (idcard) {
        query.idcard = idcard;
    }

    if (tel) {
        query.tel = tel;
    }

    if (name) {
        query.name = { $regex: new RegExp(name, "i") };
    }

    console.log(query);

    try {
        const data = await patientModel.findOne(query);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'ไม่พบข้อมูล' });
    }
}

