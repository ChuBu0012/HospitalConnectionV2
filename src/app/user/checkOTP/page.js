'use client'
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";

const Otp = () => {
    const [OTP, setOTP] = useState("");
    const inputRefs = useRef([]); // สร้าง ref สำหรับเก็บ reference ของ input ใน array
    const router = useRouter();
    const sendedOTP = useSelector(state => state.otp)
    const id = useSelector(state => state.otp)
    const [currentInputIndex, setCurrentInputIndex] = useState(0);

    useEffect(() => {
        // ตรวจสอบหาก currentInputIndex เกินความยาวของ OTP ให้เด้งไปช่องถัดไป
        if (currentInputIndex < 0) {
            setCurrentInputIndex(0);
        } else if (currentInputIndex >= inputRefs.current.length) {
            setCurrentInputIndex(inputRefs.current.length - 1);
        }
        inputRefs.current[currentInputIndex].focus();
    }, [currentInputIndex]);

    const onInputChange = (e) => {
        const { id, value } = e.target;
        const newOTP = { ...OTP, [id]: value };
        setOTP(newOTP);
        if (value === "" && id >= 1) {
            setCurrentInputIndex(parseInt(id) - 1); // ถ้ากด Backspace ให้กลับไปช่องก่อนหน้า
        } else if (value != "" && id != 5) {
            setCurrentInputIndex(parseInt(id) + 1); // เด้งไปช่องถัดไป
        } else {
            return
        }
    };

    const onClick = () => {
        const combinedOTP = Object.values(OTP).join("");

        if (combinedOTP == sendedOTP.sendedOTP) {
            router.push(`/user/${id.id}`);
        } else {
            Swal.fire({
                icon: 'warning',
                title: "กรุณาลองใหม่อีกครั้ง"
            });
        }
    };
    const sendAgain = async () => {
        try {
            let cutzero = String(sendedOTP.tel).substring(1) || sendedOTP.totel
            var data = JSON.stringify({
                "accountId": "09529681025671",
                "secretKey": "U2FsdGVkX195Jki8ch1hK/2WAMvCshyG7DCWmlLA/vU=",
                "type": "MKT",
                "to": `+66${cutzero}`,
                "sender": "BulkSMS.Ltd",
                "msg": `OTP ${sendedOTP.sendedOTP}`,
            });
            var config = {
                method: 'post',
                url: "https://smsapi.deecommerce.co.th:4300/service/SMSWebService",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const res = await axios(config)
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <Navbar>
            <div className="font-bold p-10 my-20 flex justify-center items-center flex-col">
                <div className="my-14 ml-4">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                            <div className="bg-white py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">กรุณาใส่ OTP</h1>
                                <div className="flex flex-col mt-4">
                                    <span>ที่ท่านได้รับ</span>
                                </div>

                                <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => (inputRefs.current[index] = el)} // นำ reference ของ input เก็บไว้ใน array
                                            className="m-2 border h-10 w-10 text-center form-control rounded"
                                            type="text"
                                            id={index}
                                            maxLength="1"
                                            value={OTP[index] || ""}
                                            onChange={onInputChange}
                                            onFocus={() => setCurrentInputIndex(index)} // เซ็ต currentInputIndex เมื่อมีการคลิก
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                    <h1 className="text-center">ส่งไปที่เบอร์ 0{sendedOTP?.totel}</h1>

                    <div className="text-center mt-4">
                        <button
                            className="complete border-2 hover:bg-transparent hover:text-yellow-600 border-yellow-600 bg-yellow-600 text-white  px-2 h-8 rounded font-Prompt"
                            onClick={sendAgain}
                        >
                            ส่งอีกครั้ง
                        </button>
                        <button
                            className="complete ml-4 bg-[#1974BC] hover:bg-transparent hover:text-[#1974BC] hover:border-[#1974BC] hover:border-2 text-white w-12 h-8 rounded font-Prompt"
                            onClick={onClick}
                        >
                            ตกลง
                        </button>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};
export default Otp;
