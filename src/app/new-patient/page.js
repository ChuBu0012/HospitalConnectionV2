'use client' 
import Navbar from '@/components/Navbar';
import closeloading from '@/components/closeloading';
import Form from '@/components/form/form';
import React from 'react';

const MyForm = () => {
    closeloading();
    return (
        <Navbar>
            <div className=' h-srceen  min-h-[1400px] lg:min-h-screen pb-10 container max-w-4xl m-auto mt-10'>
                <h1 className='text-fontform text-center text-3xl mb-[34px]'>ข้อมูลส่วนบุคคล</h1>
                <Form />
            </div>
        </Navbar>
    );
}

export default MyForm;
