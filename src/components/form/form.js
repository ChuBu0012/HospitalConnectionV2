import React, { useEffect, useState } from 'react'
import Brithday from './brithday'
import Address from './address'
import { useDispatch, useSelector } from 'react-redux';
import {
    setIdcard, setPrefix, setName, setSex,
    setAge, setBirthday, setBlood,
    setAllergic, setTel, setEmail, setDefaults
} from '@/redux/setform';
import Swal from 'sweetalert2';
import { createData } from '@/lib/helper';
import { useRouter } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import { setopen } from '@/redux/statusloading';
function Form() {
    const dispatch = useDispatch();
    const formState = useSelector(state => state.setform);
    const router = useRouter()
    const [loading, setloading] = useState(false);
    const { idcard, prefix, name, sex,
        age, birthday, address, subdistrict,
        district, province, zipcode, blood,
        allergic, tel, email } = formState
    const handleSubmit = () => {
        const Id_idcard = document.getElementById("idcard");
        const Id_prefix = document.getElementById("prefix");
        const Id_name = document.getElementById("name");
        const Id_sex = document.getElementById("sex");
        const Id_age = document.getElementById("age");
        const Id_day = document.getElementById('day');
        const Id_month = document.getElementById('month');
        const Id_year = document.getElementById('year');

        const Id_tu = document.getElementById('tu');
        const Id_subdistrict = document.getElementById('subdistrict'); //ตำบล
        const Id_district = document.getElementById('district'); //อำเภอ
        const Id_province = document.getElementById('province');
        const Id_zipcode = document.getElementById('zipcode');

        const Id_tel = document.getElementById('tel');


        if (idcard === '') {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_idcard.classList.add('animate-shake');
            }, 500);
            setTimeout(() => {
                Id_idcard.classList.remove('animate-shake');
            }, 2000);
            return
        }
        else if (prefix === '' || prefix === '--') {
            window.scrollTo({
                top: 50,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_prefix.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_prefix.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (name === '') {
            window.scrollTo({
                top: 100,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_name.classList.add('animate-shake');
            }, 500);
            setTimeout(() => {
                Id_name.classList.remove('animate-shake');
            }, 2000);
            return
        }
        else if (sex === '' || sex === '--') {
            window.scrollTo({
                top: 150,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_sex.classList.add('animate-shake');
            }, 500);
            setTimeout(() => {
                Id_sex.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (age === 0 || !age) {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {

                Id_age.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_age.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (birthday.day == 0 || !birthday.day) {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_day.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_day.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (birthday.month == 0 || !birthday.month) {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_month.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_month.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (birthday.year == 0 || !birthday.year) {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_year.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_year.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (address == '') {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_tu.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_tu.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (subdistrict == '') {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_subdistrict.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_subdistrict.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (district == '') {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_district.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_district.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (province == '') {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_province.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_province.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (zipcode == '') {
            window.scrollTo({
                top: 200,
                behavior: "smooth",
            });
            setTimeout(() => {
                Id_zipcode.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_zipcode.classList.remove('animate-shake');
            }, 2000);

            return
        } else if (tel == 0 || !tel) {
            setTimeout(() => {
                Id_tel.classList.add('animate-shake');
            }, 500);

            setTimeout(() => {
                Id_tel.classList.remove('animate-shake');
            }, 2000);

            return
        }


        createData(formState).then((res) => {
            setloading(true);
            Swal.fire({
                icon: 'success',
                title: 'บันทึกสำเร็จ',
                text: 'Good job!',
            }).then((res) => {
                if (res.isConfirmed) {
                    dispatch(setopen());
                    router.push("/doctor");
                }
                dispatch(setDefaults());
            });
        }).catch((err) => {
            setloading(true);
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'บันทึกไม่สำเร็จ',
                text: 'กรุณาตรวจสอบข้อมูล',
            });
        }).finally(() => setloading(false));
    }

    useEffect(() => {
        //เช็คอายุจาก วัน เดือน ปีเกิด
        const currentDate = new Date();
        const birthDate = new Date(
            birthday.year,
            birthday.month - 1, // Months are zero-based (January is 0, February is 1, etc.)
            birthday.day
        );

        const ageInMilliseconds = currentDate - birthDate;
        const ageDate = new Date(ageInMilliseconds);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        if (birthday.year &&
            (birthday.month &&
                birthday.day)) {
            dispatch(setAge(age))
        }
    }, [birthday])

    return (
        loading ? <div className='flexitemcenter justify-center'>
            <ClipLoader color="#36d7b7" />
        </div> :
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }} className='text-fontform max-w-[600px]  m-auto'>
                {/* เลขบัตร */}
                <div className='flexitemcenter'>
                    <label>เลขที่บัตรประชาชน</label>
                    <div className='whitespace-nowrap'>
                        <input id="idcard" value={idcard} onInput={(e) => dispatch(setIdcard(e.target.value))} type="text" className=' outline-none ml-4 rounded bg-bginput px-2 py-1 border' />
                        <label className='text-2xl text-red-500 ml-2'>*</label>
                    </div>
                </div>
                {/* คำนำหน้า */}
                <div className='mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap'>
                    <div className='flexitemcenter  w-[30%] justify-between'>
                        <label>คำนำหน้า</label>
                        <div className='whitespace-nowrap'>

                            <select id="prefix" value={prefix} onInput={(e) => dispatch(setPrefix(e.target.value))}
                                className='border-2 rounded p-1 ml-4'>
                                <option value="--" >--</option>
                                <option value="นาง" >นาง</option>
                                <option value="นางสาว" >นางสาว</option>
                                <option value="นาย" >นาย</option>
                            </select>
                            <label className='text-2xl text-red-500 ml-2'>*</label>
                        </div>
                    </div>
                    {/* ชื่อนามสกุล */}
                    <div className='flexitemcenter lg:ml-8 flex-1 justify-between'>
                        <label>ชื่อ - นามสกุล</label>
                        <div className='whitespace-nowrap'>
                            <input id="name" value={name} onInput={(e) => dispatch(setName(e.target.value))} type="text" className=' outline-none ml-4 rounded bg-bginput px-2 py-1 border' />
                            <label className='text-2xl  text-red-500 ml-2'>*</label>
                        </div>
                    </div>

                </div>
                <div className='mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap'>
                    {/* เพศ */}
                    <div className='flexitemcenter  w-[30%] justify-between'>
                        <label>เพศ</label>
                        <div className='whitespace-nowrapz'>
                            <select id="sex" value={sex} onInput={(e) => dispatch(setSex(e.target.value))}
                                className='border-2 rounded p-1 min-w-[84px]'>
                                <option value="--" >--</option>
                                <option value="หญิง" >หญิง</option>
                                <option value="ชาย" >ชาย</option>
                            </select>
                            <label className='text-2xl text-red-500 ml-2'>*</label>
                        </div>
                    </div>
                    {/* อายุ */}
                    <div className='flexitemcenter lg:ml-8 flex-1 justify-between'>
                        <label>อายุ</label>
                        <div className='relative flex-nowrap'>
                            <input placeholder='เลือกวันเกิดของคุณ' disabled={true} id="age" value={age ? age : ''} min={`1`} onInput={(e) => dispatch(setAge(parseInt(e.target.value)))} type="number" className=' outline-none rounded bg-bginput px-2 py-1 ml-4 border' />
                            <label className='text-2xl text-red-500 ml-2'>*</label>
                            <label className='ml-2 absolute top-2'>ปี</label>
                        </div>
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
                    <div className='flexitemcenter justify-between'>
                        <label>กรุ๊ปเลือด</label>
                        <input value={blood}
                            onInput={(e) => dispatch(setBlood(e.target.value))}
                            type="text"
                            className=' outline-none lg:ml-4 rounded bg-bginput px-2 py-1 ' />

                    </div>
                    {/* ประวัติการแพ้ (อาหาร/ยา/อื่นๆ) */}
                    <div className='flexitemcenter w-3/4 justify-between'>
                        <label>ประวัติการแพ้ (อาหาร/ยา/อื่นๆ)</label>
                        <input value={allergic} onInput={(e) => dispatch(setAllergic(e.target.value))} type="text" className=' outline-none lg:ml-4 rounded bg-bginput px-2 py-1' />

                    </div>
                    {/* เบอร์โทรศัพท์ที่ติดต่อได้ */}
                    <div className='flexitemcenter w-3/4 justify-between'>
                        <label>เบอร์โทรศัพท์ที่ติดต่อได้</label>
                        <div className='relative'>
                            <input id='tel' value={tel} onInput={(e) => dispatch(setTel(e.target.value))} type="text" className=' outline-none lg:ml-4 rounded bg-bginput px-2 py-1' />
                            <label className='text-2xl absolute text-red-500 ml-2'>*</label>
                        </div>
                    </div>
                    {/* อีเมล์ที่ติดต่อได้ */}
                    <div className='flexitemcenter w-3/4 justify-between'>
                        <label>อีเมล์ที่ติดต่อได้</label>
                        <input value={email} type="text" onInput={(e) => dispatch(setEmail(e.target.value))} className=' outline-none lg:ml-4 rounded bg-bginput px-2 py-1' />

                    </div>

                </div>
                <button type='submit' className="flexitemcenter justify-center cursor-pointer mt-8 mb-4 text-center bg-green-700 hover:bg-green-600 text-white w-2/5 min-w-[171px]  m-auto font-bold py-2 px-4 rounded">
                    บันทึกข้อมูลผู้ป่วยใหม่
                </button>

            </form>
    )
}

export default Form