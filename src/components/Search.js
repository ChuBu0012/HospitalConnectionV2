import { searchUser } from '@/lib/helper';
import Link from 'next/link';
import React, { useRef } from 'react'
import { ClipLoader } from 'react-spinners';

export default function search({ setSearch, click, src, status, loading, text }) {
    const len = useRef()
    return (
        loading ? <div className='flexitemcenter justify-center'>
            <ClipLoader color="#36d7b7" />
        </div> : <div className='flex flex-col justify-center'>
            <img src={src} className='w-5/6 md:w-3/4 m-auto' alt="" />

            <div className='relative max-w-lg text-center w-3/4 m-auto mt-8'>
                <p className='text-sm'>{text ? text : "โปรดใส่ เลขบัตรประจำตัวประชาชน,เบอร์โทรศัพท์ หรือชื่อ เพื่อค้นหาข้อมูล"}</p>
            </div>
            <div className="relative max-w-lg w-3/4 m-auto mt-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search"
                    ref={len}
                    onInput={(e) => setSearch(e)}
                    id="default-search"
                    className="block w-full p-4 pl-10 
                    text-sm text-gray-900 
                    border border-gray-300 
                    rounded-lg bg-gray-50 
                    focus:ring-blue-500
                     focus:border-blue-500 "
                    placeholder="Search" />
                <button type="submit" onClick={() => click()} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>


            {status && <p className=" text-center bg-green-500 hover:bg-green-500 text-white w-1/4 min-w-[162px] m-auto my-4 font-bold py-2 px-4 rounded">
                ไม่พบข้อมูล...<br/>
                กรุณาติดต่อเบอร์ <code>0xx-xxx-xxxx</code>
            </p>}
        </div>
    )
}
