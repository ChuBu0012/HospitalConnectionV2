import React from 'react';

export default function Brithday({ setDay, setMonth, setYear }) {
    return (
        <div className='flex flex-col flex-wrap justify-center items-center gap-4 mt-6'>
            <div className='flex '>
                <h1 className='text-left'>วัน/เดือน/ปีเกิด</h1>
                <label className='text-2xl  text-red-500 ml-2'>*</label>
            </div>
            <div className='flex flex-1 flex-wrap gap-4'>
                <select id='day' onInput={setDay} className='block flex-1 w-full max-w-[198px] p-2 border border-gray-300 rounded-md'>
                    <option value=''>-- วัน --</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day, i) => (
                        <option key={i} value={day}>
                            {day}
                        </option>
                    ))}
                </select>

                <select id='month' onInput={setMonth} className='block flex-1 w-full max-w-[198px] p-2 border border-gray-300 rounded-md'>
                    <option value=''>-- เดือน --</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month, i) => (
                        <option key={i} value={month}>
                            {month}
                        </option>
                    ))}
                </select>

                <select id='year' onInput={setYear} className='block flex-1 w-full max-w-[198px] p-2 border border-gray-300 rounded-md'>
                    <option value=''>-- ปี --</option>
                    {Array.from({ length: 124 }, (_, i) => 2023 - i).map((year, i) => (
                        <option key={i} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
