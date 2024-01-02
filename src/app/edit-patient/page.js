"use client";
import React, { useEffect, useState } from "react";
import Brithday from "./brithday";
import Address from "./address";
import { useDispatch, useSelector } from "react-redux";
import {
  setIdcard,
  setPrefix,
  setName,
  setSex,
  setAge,
  setBirthday,
  setBlood,
  setAllergic,
  setTel,
  setEmail,
  setDefaults,
  setFormdata,
} from "@/redux/setform";
import Swal from "sweetalert2";
import { deleteUser, updateData } from "@/lib/helper";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { setopen } from "@/redux/statusloading";
import { useSession } from "next-auth/react";

function EditForm({ id, loading }) {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.setform);
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
  } = formState;
  const router = useRouter();
  const [loading_in, setloading_in] = useState(false);
  const { data: session } = useSession();
  const [idCardError, setIdCardError] = useState("");

  const handleSubmit = () => {
    const Id_idcard = document.getElementById("idcard");
    const Id_prefix = document.getElementById("prefix");
    const Id_name = document.getElementById("name");
    const Id_sex = document.getElementById("sex");
    const Id_age = document.getElementById("age");
    const Id_day = document.getElementById("day");
    const Id_month = document.getElementById("month");
    const Id_year = document.getElementById("year");

    const Id_tu = document.getElementById("tu");
    const Id_subdistrict = document.getElementById("subdistrict"); //ตำบล
    const Id_district = document.getElementById("district"); //อำเภอ
    const Id_province = document.getElementById("province");
    const Id_zipcode = document.getElementById("zipcode");

    const Id_tel = document.getElementById("tel");

    if (idcard === ""  || idCardError === "เลขบัตรผิด" || idcard.length != 13) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_idcard.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_idcard.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (prefix === "" || prefix === "--") {
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_prefix.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_prefix.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (name === "") {
      window.scrollTo({
        top: 100,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_name.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_name.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (sex === "" || sex === "--") {
      window.scrollTo({
        top: 150,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_sex.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_sex.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (age === 0 || !age) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_age.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_age.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (birthday.day == 0 || !birthday.day) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_day.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_day.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (birthday.month == 0 || !birthday.month) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_month.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_month.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (birthday.year == 0 || !birthday.year) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_year.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_year.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (address == "") {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_tu.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_tu.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (subdistrict == "") {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_subdistrict.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_subdistrict.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (district == "") {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_district.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_district.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (province == "") {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_province.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_province.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (zipcode == "") {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_zipcode.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_zipcode.classList.remove("animate-shake");
      }, 2000);

      return;
    } else if (tel == 0 || !tel) {
      setTimeout(() => {
        Id_tel.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_tel.classList.remove("animate-shake");
      }, 2000);

      return;
    }

    Swal.fire({
      icon: "warning",
      title: "แก้ไขข้อมูลนี้ไหม?",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        updateData(id, { _id: id, ...formState })
          .then((res) => {
            setloading_in(true);
            Swal.fire({
              icon: "success",
              title: "แก้ไขสำเร็จ",
              text: "Good job!",
            }).then((res) => {
              if (res.isConfirmed) {
                dispatch(setopen());
                router.push("/doctor");
              }
              dispatch(setDefaults());
            });
          })
          .catch((err) => {
            setloading_in(true);
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "แก้ไขไม่สำเร็จ",
              text: "กรุณาตรวจสอบข้อมูล",
            });
          })
          .finally(() => setloading_in(false));
      } else if (result.isDismissed) {
        return;
      }
    });
  };

  const deleteData = () => {
    Swal.fire({
      icon: "warning",
      title: "ลบข้อมูลนี้ไหม?",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
          .then((res) => {
            setloading_in(true);
            Swal.fire({
              icon: "success",
              title: "ลบข้อมูลสำเร็จ",
              text: "Good job!",
            }).then((res) => {
              if (res.isConfirmed) {
                router.push(
                  `/${
                    session?.user?.name?.role === "Doctor" ? "doctor" : "user"
                  }`
                );
              }
            });
          })
          .catch((err) => {
            setloading_in(true);
            Swal.fire({
              icon: "error",
              title: "ลบข้อมูลไม่สำเร็จ",
            });
          })
          .finally(() => {
            setloading_in(false);
          });
      } else if (result.isDismissed) {
        return;
      }
    });
  };
  const validateIdCard = (id) => {
    if (id.substring(0, 1) === "0") return false;
    if (id.length !== 13) return false;

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(id.charAt(i)) * (13 - i);
    }

    return (11 - (sum % 11)) % 10 === parseFloat(id.charAt(12));
  };
  const handleIdCardChange = (e) => {
    const idValue = e.target.value.trim();
    dispatch(setIdcard(idValue));

    if (idValue !== "" && idValue.length === 13) {
      const id = idValue.replace(/-/g, "");
      const isValidIdCard = validateIdCard(id);

      if (!isValidIdCard) {
        setIdCardError("เลขบัตรผิด");
      } else {
        setIdCardError("เลขบัตรถูกต้อง");
      }
    } else {
      setIdCardError("");
    }
  };

  useEffect(() => {
    //เช็คอายุจาก วัน เดือน ปีเกิด
    const currentDate = new Date();
    const birthDate = new Date(
      birthday?.year,
      birthday?.month - 1, // Months are zero-based (January is 0, February is 1, etc.)
      birthday?.day
    );

    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (birthday?.year && birthday?.month && birthday?.day) {
      dispatch(setAge(age));
    }
  }, [birthday]);
  return loading || loading_in ? (
    <div className="flexitemcenter justify-center">
      <ClipLoader color="#36d7b7" />
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="text-fontform max-w-[600px]  m-auto pb-20"
    >
      {/* เลขบัตร */}
      <div className="flexitemcenter">
        <label>เลขที่บัตรประชาชน</label>
        <div className="whitespace-nowrap">
          <input
            disabled={session?.user?.name?.role === "Doctor" ? false : true}
            id="idcard"
            value={idcard}
            onInput={(e) => handleIdCardChange(e)}
            type="text"
            className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
          />
          <label className="text-2xl text-red-500 ml-2 relative">
            *
            {idCardError && (
              <span
                className={`error absolute -left-10 top-2 text-lg ${
                  idCardError === "เลขบัตรถูกต้อง"
                    ? "text-green-400 font-bold -left-8"
                    : ""
                }`}
              >
                {idCardError === "เลขบัตรถูกต้อง" ? "✓" : "❌"}
              </span>
            )}
          </label>
        </div>
      </div>
      {/* คำนำหน้า */}
      <div className="mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap">
        <div className="flexitemcenter  w-[30%] justify-between">
          <label>คำนำหน้า</label>
          <div className="whitespace-nowrap">
            <select
              disabled={session?.user?.name?.role === "Doctor" ? false : true}
              id="prefix"
              value={prefix}
              onInput={(e) => dispatch(setPrefix(e.target.value))}
              className="border-2 rounded p-1 ml-4"
            >
              <option value="--">--</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
              <option value="นาย">นาย</option>
            </select>
            <label className="text-2xl text-red-500 ml-2">*</label>
          </div>
        </div>
        {/* ชื่อนามสกุล */}
        <div className="flexitemcenter lg:ml-8 flex-1 justify-between">
          <label>ชื่อ - นามสกุล</label>
          <div className="whitespace-nowrap">
            <input
              disabled={session?.user?.name?.role === "Doctor" ? false : true}
              id="name"
              value={name}
              onInput={(e) => dispatch(setName(e.target.value))}
              type="text"
              className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
            />
            <label className="text-2xl  text-red-500 ml-2">*</label>
          </div>
        </div>
      </div>
      <div className="mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap">
        {/* เพศ */}
        <div className="flexitemcenter  w-[30%] justify-between">
          <label>เพศ</label>
          <div className="whitespace-nowrapz">
            <select
              disabled={session?.user?.name?.role === "Doctor" ? false : true}
              id="sex"
              value={sex}
              onInput={(e) => dispatch(setSex(e.target.value))}
              className="border-2 rounded p-1 min-w-[84px]"
            >
              <option value="--">--</option>
              <option value="หญิง">หญิง</option>
              <option value="ชาย">ชาย</option>
            </select>
            <label className="text-2xl text-red-500 ml-2">*</label>
          </div>
        </div>
        {/* อายุ */}
        <div className="flexitemcenter lg:ml-8 flex-1 justify-between">
          <label>อายุ</label>
          <div className="relative flex-nowrap">
            <input
              placeholder="เลือกวันเกิดของคุณ"
              disabled={true}
              id="age"
              value={age ? age : ""}
              min={`1`}
              onInput={(e) => dispatch(setAge(parseInt(e.target.value)))}
              type="number"
              className=" outline-none rounded bg-bginput px-2 py-1 ml-4 border"
            />
            <label className="text-2xl text-red-500 ml-2">*</label>
            <label className="ml-2 absolute top-2">ปี</label>
          </div>
        </div>
      </div>
      {/* วัน เดือน ปีเกิด */}
      <div className="mt-4">
        <Brithday
          checkdoctor={session?.user?.name?.role === "Doctor" ? false : true}
        />
      </div>
      {/* ที่อยู่ ตำบล อำเภอ จังหวัด */}
      <Address
        checkdoctor={session?.user?.name?.role === "Doctor" ? false : true}
      />

      <div className="mt-4 flexitemcenter  gap-x-8 gap-y-4 flex-wrap">
        {/* กรุ๊ปเลือด */}
        <div className="flexitemcenter justify-between">
          <label>กรุ๊ปเลือด</label>
          <input
            disabled={session?.user?.name?.role === "Doctor" ? false : true}
            value={blood}
            onInput={(e) => dispatch(setBlood(e.target.value))}
            type="text"
            className=" outline-none lg:ml-4 rounded bg-bginput px-2 py-1"
          />
          <label className="ml-2"></label>
        </div>
        {/* ประวัติการแพ้ (อาหาร/ยา/อื่นๆ) */}
        <div className="flexitemcenter w-3/4 justify-between">
          <label>ประวัติการแพ้ (อาหาร/ยา/อื่นๆ)</label>
          <input
            disabled={session?.user?.name?.role === "Doctor" ? false : true}
            value={allergic}
            onInput={(e) => dispatch(setAllergic(e.target.value))}
            type="text"
            className=" outline-none lg:ml-4 rounded bg-bginput px-2 py-1"
          />
        </div>
        {/* เบอร์โทรศัพท์ที่ติดต่อได้ */}
        <div className="flexitemcenter w-3/4 justify-between relative">
          <label>เบอร์โทรศัพท์ที่ติดต่อได้</label>
          <div className="relative">
            <input
              id="tel"
              disabled={session?.user?.name?.role === "Doctor" ? false : true}
              value={tel}
              onInput={(e) => dispatch(setTel(e.target.value))}
              type="text"
              className=" outline-none lg:ml-4 rounded bg-bginput px-2 py-1"
            />
            <label className="text-2xl absolute text-red-500 ml-2">*</label>
          </div>
        </div>
        {/* อีเมล์ที่ติดต่อได้ */}
        <div className="flexitemcenter w-3/4 justify-between">
          <label>อีเมล์ที่ติดต่อได้</label>
          <input
            disabled={session?.user?.name?.role === "Doctor" ? false : true}
            value={email}
            type="text"
            onInput={(e) => dispatch(setEmail(e.target.value))}
            className=" outline-none lg:ml-4 rounded bg-bginput px-2 py-1"
          />
        </div>
      </div>
      {session?.user?.name?.role === "Doctor" && session && (
        <div className="flex">
          <button
            type="submit"
            className="flexitemcenter justify-center cursor-pointer mt-8 mb-4 text-center bg-green-700 hover:bg-green-600 text-white w-2/5 min-w-[171px]  m-auto font-bold py-2 px-4 rounded"
          >
            แก้ไขข้อมูล
          </button>
          <button
            type="button"
            onClick={() => deleteData()}
            className="flexitemcenter justify-center cursor-pointer mt-8 mb-4 text-center bg-red-700 hover:bg-red-600 text-white w-2/5 min-w-[171px]  m-auto font-bold py-2 px-4 rounded"
          >
            ลบข้อมูล
          </button>
        </div>
      )}
      <div className="flex px-[1.875rem]">
        <p className=" flexitemcenter justify-center w-full cursor-pointer mt-4 mb-4 text-center bg-yellow-400 hover:bg-yellow-500 text-white min-w-[171px]  m-auto font-bold py-2 px-4 rounded">
          ประวัติการรักษา
        </p>
      </div>
    </form>
  );
}

export default EditForm;
