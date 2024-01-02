'use client'
import Navbar from "@/components/Navbar";
import closeloading from "@/components/closeloading";
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import Search from '@/components/Search';

import { useEffect, useState } from "react";
import { getDatas, searchUser } from "@/lib/helper";
import { useDispatch } from "react-redux";
import { setDefaults } from "@/redux/setform";
export default function Page() {
    closeloading();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setDefaults())
    }, [])
    const [search, setSearch] = useState('');
    const [statusBtn, setstatusBtn] = useState(false);
    const [loading, setloading] = useState(false);
    const { data: session } = useSession({
        required: true
    })
    const router = useRouter()
    if (session && session?.user?.name?.role !== 'Doctor') {
        router.push('/')
    }


    const handleSearch = () => {
        setloading(true);
        if (search === "") {
            setstatusBtn(true);
            setloading(false);
            return;
        }
        searchUser(search)
            .then((res) => {
                if (!res) {
                    setstatusBtn(true);
                    setloading(false);
                } else {
                    router.push(`/doctor/${res?._id}`); 
                }
            })
            .catch((err) => {
                console.log(err);
                setloading(false);
            })
    };

    return (
        <Navbar>
            <div className='h-srceen min-h-[650px] w-full container max-w-6xl m-auto pt-10 flex flex-col justify-center pb-20'>
                <Search src={'dc.png'}
                    setSearch={(e) => setSearch(e.target.value)}
                    status={statusBtn}
                    loading={loading}
                    doctor={true}
                    click={() => {
                        handleSearch()
                    }}
                />
            </div>
        </Navbar>
    )
}
