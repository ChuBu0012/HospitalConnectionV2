"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Brithday from "./brithday";
import { createAccounts } from "@/lib/helper";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import CloseLoading from "@/components/closeloading";

const Register = () => {
  CloseLoading();
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [state, setState] = useState({
    idcard: "",
    doctor_id: "",
    name: "",
    birthday: {
      day: 0,
      month: 0,
      year: 0,
    },
    organization: "",
    position: "",
    phone: "",
    age: 0,
    password: "",
  });
  const [conpassword, setConpassword] = useState("");
  const [Image, setImage] = useState("");
  const [idCardError, setIdCardError] = useState("");

  // แปลงไฟล์รูปภาพให้เป็น base64
  const covertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      Swal.fire({
        icon: "error",
        title: "Upload Fail...",
        text: error,
      });
    };
  };
  const setvalue = (e, key) => {
    setState({ ...state, [key]: e.target.value });
  };
  const setBirthdayDay = (e, key) => {
    setState({
      ...state,
      birthday: {
        ...state.birthday,
        [key]: e.target.value,
      },
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
    setState({ ...state, idcard: idValue });

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
  const handleSubmit = () => {
    const Id_idcard = document.getElementById("idcard");
    const Id_doctor_id = document.getElementById("doctor_id");
    const Id_name = document.getElementById("name");
    const Id_password = document.getElementById("password");
    const Id_organization = document.getElementById("organization");
    const Id_position = document.getElementById("position");
    const Id_phone = document.getElementById("phone");
    const Id_day = document.getElementById("day");
    const Id_month = document.getElementById("month");
    const Id_year = document.getElementById("year");
    if (state.idcard === "" || idCardError === "เลขบัตรผิด"  || state.idcard.length != 13) {
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
    } else if (state.doctor_id === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_doctor_id.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_doctor_id.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.password === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_password.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_password.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.name === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_name.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_name.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.birthday.day == 0 || !state.birthday.day) {
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_day.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_day.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.birthday.month == 0 || !state.birthday.month) {
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_month.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_month.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.birthday.year == 0 || !state.birthday.year) {
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_year.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_year.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.birthday.day == 0 || !state.birthday.day) {
      window.scrollTo({
        top: 50,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_day.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_day.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.organization === "") {
      window.scrollTo({
        top: 360,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_organization.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_organization.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (state.position === "") {
      window.scrollTo({
        top: 380,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_position.classList.add("animate-shake");
      }, 500);
      setTimeout(() => {
        Id_position.classList.remove("animate-shake");
      }, 2000);
      return;
    } else if (!state.phone) {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      setTimeout(() => {
        Id_phone.classList.add("animate-shake");
      }, 500);

      setTimeout(() => {
        Id_phone.classList.remove("animate-shake");
      }, 2000);

      return;
    }
    if (state.password != conpassword) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกรหัสผ่านให้ตรงกัน",
      });
      return;
    }
    Swal.fire({
      icon: "question",
      title: "ต้องการลงทะเบียนบุคลากรทางการแพทย์ใช่ หรือไม่",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((res) => {
      if (res.isConfirmed) {
        setloading(true);
        createAccounts({ ...state, image: Image })
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "บันทึกสำเร็จ",
              text: "Good job!",
            }).then((res) => {
              if (res.isConfirmed) {
                router.push("/");
              }
              setloading(false);
            });
          })
          .catch((err) => {
            setloading(false);
            Swal.fire({
              icon: "error",
              title: "ลงทะเบียนไม่สำเร็จ",
              text: err?.response?.data?.error,
            });
          })
          .finally(() => setloading(false));
      }
    });
  };
  useEffect(() => {
    //เช็คอายุจาก วัน เดือน ปีเกิด
    const currentDate = new Date();
    const birthDate = new Date(
      state.birthday.year,
      state.birthday.month - 1, // Months are zero-based (January is 0, February is 1, etc.)
      state.birthday.day
    );

    const ageInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (state.birthday.year && state.birthday.month && state.birthday.day) {
      setState({ ...state, age: age });
    }
  }, [state.birthday]);
  return (
    <Navbar>
      {loading ? (
        <div className="flexitemcenter justify-center">
          <ClipLoader color="#36d7b7" />
        </div>
      ) : (
        <div className=" h-srceen  min-h-[1400px] lg:min-h-screen pb-10 container max-w-4xl m-auto">
          <h1 className="text-center text-2xl font-bold mb-10">
            ลงทะเบียนบุคลากรทางการแพทย์
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="text-fontform max-w-[500px] m-auto"
          >
            {/* เลขบัตร */}
            <div className="flexitemcenter justify-between">
              <label>เลขที่บัตรประชาชน</label>
              <div className="whitespace-nowrap">
                <input
                  id="idcard"
                  type="text"
                  name="idcard"
                  placeholder="idcard"
                  onInput={(e) => handleIdCardChange(e)}
                  className="outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2 relative">
                  *
                  {idCardError && (
                    <span
                      className={`error absolute -left-10 top-2 text-lg ${
                        idCardError === "เลขบัตรถูกต้อง" ? "text-green-400 font-bold -left-8" : ""
                      }`}
                    >
                      {idCardError === "เลขบัตรถูกต้อง" ? "✓" : "❌"}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="flexitemcenter justify-between mt-4">
              <label>เลขประจำตัวแพทย์ / บุคลากร</label>
              <div className="whitespace-nowrap">
                <input
                  id="doctor_id"
                  name="doctor_id"
                  placeholder="doctor_id"
                  onInput={(e) => setvalue(e, "doctor_id")}
                  type="text"
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>
            <div className="flexitemcenter justify-between mt-4">
              <label>ป้อนรหัสผ่าน</label>
              <div className="whitespace-nowrap">
                <input
                  id="password"
                  name="password"
                  placeholder="กรุณาป้อนรหัสผ่าน"
                  onInput={(e) => setvalue(e, "password")}
                  type="password"
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>
            <div className="flexitemcenter justify-between mt-4">
              <label>ยืนยันรหัสผ่าน</label>
              <div className="whitespace-nowrap">
                <input
                  id="conpassword"
                  name="conpassword"
                  placeholder="กรุณาป้อนรหัสผ่านอีกครั้ง"
                  onInput={(e) => setConpassword(e.target.value)}
                  type="password"
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>
            <div className="flexitemcenter justify-between mt-4">
              <label>ชื่อ - นามสกุล</label>
              <div className="whitespace-nowrap">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  onInput={(e) => setvalue(e, "name")}
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>

            <Brithday
              setDay={(e) => setBirthdayDay(e, "day")}
              setMonth={(e) => setBirthdayDay(e, "month")}
              setYear={(e) => setBirthdayDay(e, "year")}
            />

            <div className="flexitemcenter justify-center mt-2">
              <label>อายุ</label>
              <div className="whitespace-nowrap ">
                <input
                  id="age"
                  type="text"
                  value={state.age}
                  disabled
                  name="age"
                  placeholder="กรุณาเลือกวันเกิด"
                  className="outline-none ml-4 w-12 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>

            <div className="flexitemcenter justify-between mt-4">
              <label>หน่วยงาน</label>
              <div className="whitespace-nowrap">
                <input
                  id="organization"
                  type="text"
                  name="organization"
                  placeholder="organization"
                  onInput={(e) => setvalue(e, "organization")}
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>

            <div className="flexitemcenter justify-between mt-4">
              <label>ตำแหน่ง</label>
              <div className="whitespace-nowrap">
                <input
                  id="position"
                  type="text"
                  name="position"
                  placeholder="position"
                  onInput={(e) => setvalue(e, "position")}
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>

            <div className="flexitemcenter justify-between mt-4">
              <label>เบอร์โทรศัพท์</label>
              <div className="whitespace-nowrap">
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="phone"
                  onInput={(e) => setvalue(e, "phone")}
                  className=" outline-none ml-4 rounded bg-bginput px-2 py-1 border"
                />
                <label className="text-2xl text-red-500 ml-2">*</label>
              </div>
            </div>

            {Image ? (
              ""
            ) : (
              <div className="flex items-center justify-center w-full mt-8">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center 
                        w-3/4 md:w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 text-center ">
                      <span className="font-semibold">
                        Click to upload Profile
                      </span>
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => covertToBase64(e)}
                  />
                </label>
              </div>
            )}

            {Image && (
              <div className="relative mt-8">
                <img
                  src={Image}
                  className="  m-auto rounded-lg object-contain max-h-[256px]"
                  height={256}
                  width={500}
                  alt=""
                />
                <label
                  for="dropzone-file"
                  className="opacity-0 absolute top-0 flex flex-col items-center justify-center 
                        w-3/4 md:w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 text-center ">
                      <span className="font-semibold">
                        Click to upload Profile
                      </span>
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={(e) => covertToBase64(e)}
                  />
                </label>
              </div>
            )}

            <button
              type="submit"
              className="flexitemcenter justify-center cursor-pointer mt-8 mb-4 text-center bg-green-700 hover:bg-green-600 text-white w-2/5 min-w-[171px]  m-auto font-bold py-2 px-4 rounded"
            >
              ลงทะเบียนบุคลากรทางการแพทย์
            </button>
          </form>
        </div>
      )}
    </Navbar>
  );
};

export default Register;
