import React from 'react'
import Brithday from './brithday'
import Address from './address'

function Form() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }} className='text-fontform max-w-[600px]  m-auto'>
            {/* เลขบัตร */}
            <div className='flexitemcenter'>
                <label>เลขที่บัตรประชาชน</label>
                <div>

                    <input type="text" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                    <label className='text-2xl text-red-500 ml-2'>*</label>
                </div>
            </div>
            {/* คำนำหน้า */}
            <div className='mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap'>
                <div className='flexitemcenter '>
                    <label>คำนำหน้า</label>
                    <div>

                        <select className='border-2 rounded p-1 ml-4'>
                            <option value="--" >--</option>
                            <option value="นาง" >นาง</option>
                            <option value="นางสาว" >นางสาว</option>
                            <option value="นาย" >นาย</option>
                        </select>
                        <label className='text-2xl text-red-500 ml-2'>*</label>
                    </div>
                </div>
                {/* ชื่อนามสกุล */}
                <div className='flexitemcenter'>
                    <label>ชื่อ - นามสกุล</label>
                    <div>
                        <input type="text" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                        <label className='text-2xl text-red-500 ml-2'>*</label>
                    </div>
                </div>

            </div>
            <div className='mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap'>
                {/* เพศ */}
                <div className='flexitemcenter '>
                    <label>เพศ</label>
                    <div>

                        <select className='border-2 rounded p-1 ml-4'>
                            <option value="--" >--</option>
                            <option value="นาง" >หญิง</option>
                            <option value="นางสาว" >ชาย</option>
                        </select>
                        <label className='text-2xl text-red-500 ml-2'>*</label>
                    </div>
                </div>
                {/* อายุ */}
                <div className='flexitemcenter'>
                    <label>อายุ</label>
                    <div>
                        <input type="number" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                        <label className='text-2xl text-red-500 ml-2'>*</label>
                    </div>
                    <label className='ml-2'>ปี</label>
                </div>

            </div>
            {/* วัน เดือน ปีเกิด */}
            <div className='mt-4'>
                <Brithday />
            </div>
            {/* ที่อยู่ ตำบล อำเภอ จังหวัด */}
            <Address />

            <div className='mt-4 flexitemcenter  gap-x-8 gap-y-4 flex-wrap'>

                {/* กรุ๊ปเลือด */}
                <div className='flexitemcenter'>
                    <label>กรุ๊ปเลือด</label>
                    <input type="number" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                    <label className='ml-2'></label>
                </div>
                {/* ประวัติการแพ้ (อาหาร/ยา/อื่นๆ) */}
                <div className='flexitemcenter'>
                    <label>ประวัติการแพ้ (อาหาร/ยา/อื่นๆ)</label>
                    <input type="number" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                    <label className='ml-2'></label>
                </div>
                {/* เบอร์โทรศัพท์ที่ติดต่อได้ */}
                <div className='flexitemcenter'>
                    <label>เบอร์โทรศัพท์ที่ติดต่อได้</label>
                    <input type="number" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                    <label className='ml-2'></label>
                </div>
                {/* อีเมล์ที่ติดต่อได้ */}
                <div className='flexitemcenter'>
                    <label>อีเมล์ที่ติดต่อได้</label>
                    <input type="number" className=' outline-none ml-4 rounded bg-bginput px-2 py-1' />
                    <label className='ml-2'></label>
                </div>

            </div>
        </form>
    )
}

export default Form