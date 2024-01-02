import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setDay, setMonth, setYear
} from '@/redux/setform';
export default function Brithday({ checkdoctor }) {
    const dispatch = useDispatch()
    const formState = useSelector(state => state.setform);
    const { idcard, prefix, name, sex,
        age, birthday, address, subdistrict,
        district, province, zipcode, blood,
        allergic, tel, email } = formState
    return (
        <div className='flex flex-col flex-wrap justify-center items-center gap-4 mt-2'>
            <h1 className='text-left'>วัน/เดือน/ปีเกิด</h1>
            <div className='flex flex-1 flex-wrap gap-4'>
                <select id='day' disabled={checkdoctor} value={birthday?.day} onInput={(e) => dispatch(setDay(e.target.value))} className='block flex-1 w-full max-w-[198px] p-2 border border-gray-300 rounded-md'>
                    <option value=''>-- วัน --</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day, i) => (
                        <option key={i} value={day}>
                            {day}
                        </option>
                    ))}
                </select>

                <select id='month' disabled={checkdoctor} value={birthday?.month} onInput={(e) => dispatch(setMonth(e.target.value))} className='block flex-1 w-full max-w-[198px] p-2 border border-gray-300 rounded-md'>
                    <option value=''>-- เดือน --</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month, i) => (
                        <option key={i} value={month}>
                            {month}
                        </option>
                    ))}
                </select>

                <select id='year' disabled={checkdoctor} value={birthday?.year} onInput={(e) => dispatch(setYear(e.target.value))} className='block flex-1 w-full max-w-[198px] p-2 border border-gray-300 rounded-md'>
                    <option value=''>-- ปี --</option>
                    {Array.from({ length: 124 }, (_, i) => new Date().getFullYear() - i).map((year, i) => (
                        <option key={i} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
