import doctorModel from '@/model/doctor';
import { getSession } from 'next-auth/react';

export async function getDatas(req, res) {
    try {
        // const session = await getSession({ req });
        // if (!session) {
        //     return res.status(200).json({ Message: "กรุณาเข้าสู่ระบบ" });
        // }
        const findDatas = await doctorModel.find({});
        return res.status(200).json(findDatas);

    } catch (error) {
        return res.status(404).json({ error: "อ่านข้อมูลไม่สำเร็จ" });
    }
}

export async function getData(req, res) {
    try {
        const { id } = req.query
        const findData = await doctorModel.findOne({ doctor_id: id });
        return res.status(200).json(findData);

    } catch (error) {
        return res.status(404).json({ error: "อ่านข้อมูลไม่สำเร็จ" });
    }
}


export async function createData(req, res) {
    try {
        const {
            idcard,
            doctor_id,
            name,
            birthday,
            organization,
            position,
            phone,
            age,
            image,
            password
        } = req.body;

        const doctor = await doctorModel.findOne({ doctor_id })
        if (!doctor) {
            // สร้างข้อมูลใหม่ตาม doctorSchema
            const newDoctor = await doctorModel.create({
                idcard,
                doctor_id,
                name,
                birthday,
                organization,
                position,
                phone, age,
                image,
                password
            });
            return res.status(200).json(newDoctor);
        } else if (doctor) {
            return res.status(404).json({ error: 'เลขบัตรประจำตัวแพทย์ซ้ำ' });

        }

        return res.status(404).json({ error: 'ลงทะเบียนบุคลากรทางการแพทย์ไม่สำเร็จ' });

    } catch (error) {
        // หากเกิดข้อผิดพลาดในการบันทึกข้อมูล
        return res.status(404).json({ error: "บันทึกข้อมูลไม่สำเร็จ", data: error });
    }
}


export async function deleteData(req, res) {
    try {
        const result = await doctorModel.deleteMany({});
        return res
            .status(200)
            .json({ deleted: "ลบข้อมูลสำเร็จ", deletedCount: result.deletedCount });

    } catch (error) {
        return res.status(404).json({ error: "ลบข้อมูลไม่สำเร็จ" });
    }
}


