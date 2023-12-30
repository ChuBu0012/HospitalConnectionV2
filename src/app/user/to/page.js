'use client'
import Navbar from "@/components/Navbar";
import closeloading from "@/components/closeloading";
import { useRouter } from 'next/navigation';
import Search from '@/components/Search';

import { useEffect, useState } from "react";
import { searchUser } from "@/lib/helper";
import { useDispatch, useSelector } from "react-redux";
import { setDefaults } from "@/redux/setform";
import { setDefault, setId, setSendedOTP, setTel, setTotel } from "@/redux/otp";
import axios from "axios";
import Swal from "sweetalert2";
export default function Page() {
    closeloading();
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const [loading, setloading] = useState(false);
    const router = useRouter()

    function generateRandom6DigitNumber() {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        console.log(randomNumber);
        return randomNumber;
    }


    const sendMessage = async (tel) => {
        try {
            const sendedOTP = generateRandom6DigitNumber()
            let cutzero = String(tel).substring(1)
            dispatch(setTotel(cutzero))
            var data = JSON.stringify({
                "accountId": "09529681025671",
                "secretKey": "U2FsdGVkX195Jki8ch1hK/2WAMvCshyG7DCWmlLA/vU=",
                "type": "MKT",
                "to": `+66${cutzero}`,
                "sender": "BulkSMS.Ltd",
                "msg": `OTP ${sendedOTP}`,
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
            console.log(res);
            if (res.delivery_code == 164) {
                dispatch(setSendedOTP(sendedOTP))
                router.push(`/user/checkOTP`);
            } else {
                setloading(false)
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด"
            }
            )
            setloading(false)
        }
    }


    const handleSearch = () => {
        setloading(true);
        dispatch(setTel(search))
        sendMessage(search)
    };


    return (
        <Navbar>
            <div className='h-srceen min-h-[650px] w-full container max-w-6xl m-auto mt-10 flex flex-col justify-center pb-20'>
                <Search src={'../198.jpg'}
                    setSearch={(e) => setSearch(e.target.value)}
                    status={false}
                    text={"โปรดใส่เบอร์โทรเพื่อยืนยันตัวตน"}
                    loading={loading}
                    click={() => {
                        handleSearch()
                    }}
                />
            </div>
        </Navbar>
    )
}