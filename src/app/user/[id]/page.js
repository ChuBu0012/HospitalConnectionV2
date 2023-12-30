'use client'

import EditForm from '@/app/edit-patient/page';
import Navbar from '@/components/Navbar';
import CloseLoading from '@/components/closeloading';
import { getData } from '@/lib/helper';
import { setFormdata } from '@/redux/setform';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';

export default function User({ params }) {
    const { id } = params;
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        getData(id).then((res) => {
            setloading(true)
            const { idcard, prefix, name, sex,
                age, birthday, address, subdistrict,
                district, province, zipcode, blood,
                allergic, tel, email } = res
            dispatch(setFormdata({
                idcard, prefix, name, sex,
                age, birthday, address, subdistrict,
                district, province, zipcode, blood,
                allergic, tel, email
            }))

        }).catch((err) => {
            router.push("/user")

        }).finally(() => {
            setloading(false)
        })
    }, [])
    return (
        <Navbar>
            {
                loading ? <div className='flexitemcenter justify-center'>
                    <ClipLoader color="#36d7b7" />
                </div> : <EditForm id={id} />
            }
        </Navbar>
    )
}

