'use client'
import Navbar from "@/components/Navbar";
import closeloading from "@/components/closeloading";
import { useRouter } from 'next/navigation';
import Search from '@/components/Search';

import { useEffect, useState } from "react";
import { searchUser } from "@/lib/helper";
import { useDispatch } from "react-redux";
import { setDefaults } from "@/redux/setform";
import { setDefault, setId, setTel } from "@/redux/otp";
import Swal from 'sweetalert2';
export default function Page() {
    useEffect(() => { dispatch(setDefault()) }, [])
    closeloading();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDefaults())
    }, [])
    const [search, setSearch] = useState('');
    const [statusBtn, setstatusBtn] = useState(false);
    const [loading, setloading] = useState(false);
    const router = useRouter()

    const handleSearch = () => {
        setloading(true);
        if (search === "") {
            setstatusBtn(true);
            setloading(false);
            return;
        }
        searchUser(search)
            .then((res) => {
                setloading(true);
                if (!res) {
                    setstatusBtn(true);
                    setloading(false);
                } else {
                    dispatch(setId(res._id))
                    router.push("/user/to")
                }
            })
            .catch((error) => {
                setloading(true);
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด"
                })
                setloading(false);
            })
    };


    return (
        <Navbar>
            <div className='h-srceen min-h-[650px] w-full container max-w-6xl m-auto mt-10 flex flex-col justify-center pb-20'>
                <Search src={'dcu.png'}
                    setSearch={(e) => setSearch(e.target.value)}
                    status={statusBtn}
                    loading={loading}
                    click={() => {
                        handleSearch()
                    }}
                />
            </div>
        </Navbar>
    )
}