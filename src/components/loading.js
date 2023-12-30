import React, { useEffect } from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);
    return (
        <div className='w-full h-screen overflow-hidden flex justify-center items-center'>
            <ClipLoader color="#36d7b7" />
        </div>
    )
}
