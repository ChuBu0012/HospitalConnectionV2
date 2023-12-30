import React, { useState } from 'react';
import thai_tambons from '@/thai-province-data/thai_tambons';
import thai_amphures from '@/thai-province-data/thai_amphures';
import thai_provinces from '@/thai-province-data/thai_provinces';
import { useDispatch, useSelector } from 'react-redux';

import {
    setAddress, setSubdistrict,
    setDistrict, setProvince, setZipcode
} from '@/redux/setform';
const Address = () => {
    const dispatch = useDispatch();

    const [tambons, setTambons] = useState([]);
    const [amphures, setAmphures] = useState([]);
    const [provinces, setProvinces] = useState([]);

    const formState = useSelector(state => state.setform);
    const { address, subdistrict,
        district, province, zipcode } = formState

    const checkTambons = (TambonsIndex) => {
        if (TambonsIndex == '') {
            setProvinces([])
            setTambons([])
            setAmphures([])
            dispatch(setSubdistrict(''))
            dispatch(setDistrict(''))
            dispatch(setProvince(''))
            dispatch(setZipcode(''))
            return;
        }
        const searchTambons = thai_tambons.filter(item => {
            return item.name_th == TambonsIndex
        })
        const searchAmphures = thai_amphures.filter(item => {
            return item.id == searchTambons[0].amphure_id;
        })
        const searchProvinces = thai_provinces.filter(item => {
            return item.id == searchAmphures[0].province_id
        })
        setAmphures(searchAmphures)
        setProvinces(searchProvinces)
    }
    const checkAmphures = (amphuresIndex) => {
        if (amphuresIndex == '') {
            setProvinces([])
            setTambons([])
            setAmphures([])
            dispatch(setSubdistrict(''))
            dispatch(setDistrict(''))
            dispatch(setProvince(''))
            dispatch(setZipcode(''))
            return;
        }
        const searchAmphures = thai_amphures.filter(item => item.name_th == amphuresIndex)
        const searchTambons = thai_tambons.filter(item => item.amphure_id == searchAmphures[0].id)
        const searchProvinces = thai_provinces.filter(item => {
            return item.id == searchAmphures[0].province_id
        })
        setTambons(searchTambons);
        setProvinces(searchProvinces)
    }
    const checkProvinces = (provincesIndex) => {
        if (provincesIndex == '') {
            setProvinces([])
            setTambons([])
            setAmphures([])
            dispatch(setSubdistrict(''))
            dispatch(setDistrict(''))
            dispatch(setProvince(''))
            dispatch(setZipcode(''))
            console.log();
            return
        }
        const searchProvinces = thai_provinces.filter(item => {
            return item.name_th == provincesIndex
        })
        const searchAmphures = thai_amphures.filter(item => item.province_id == searchProvinces[0].id)
        setAmphures(searchAmphures)
    }

    const checkZipcode = (zipcode) => {

        if (zipcode == '') {
            setProvince([])
            setTambons([])
            setAmphures([])
            dispatch(setSubdistrict(''))
            dispatch(setDistrict(''))
            dispatch(setProvince(''))
            dispatch(setZipcode(''))
            return
        }
        const searchTambons = thai_tambons.filter(item => {
            return item.zip_code == zipcode
        })

        const searchAmphures = thai_amphures.filter(item =>
            item.id == searchTambons[0].amphure_id)

        const searchProvinces = thai_provinces.filter(item => {
            return item.id == searchAmphures[0].province_id;
        })

        setTambons(searchTambons)
        setAmphures(searchAmphures)
        setProvinces(searchProvinces)


    }




    return (
        <div className='mt-4 flexitemcenter gap-x-8 gap-y-4 flex-wrap'>
            {/* ชื่อนามสกุล */}
            <div className='flex justify-center lg:justify-between flex-1 flex-wrap'>
                <div className='flexitemcenter w-[47.9%] justify-between'>
                    <div>
                        <label>ที่อยู่</label>
                    </div>
                    <div className='relative'>
                        <input id='tu'
                            value={address}
                            onInput={(e) => dispatch(setAddress(e.target.value))}
                            type='text'
                            className='max-w-[211px] outline-none rounded bg-bginput px-2 py-1' />
                        <label className='text-2xl absolute text-red-500 ml-2'>*</label>
                    </div>

                </div>
                <div className='flexitemcenter'>
                    <label >ตำบล</label>
                    <div className='relative lg:ml-[24px] lg:mr-[10px]'>
                        <select id='subdistrict' value={subdistrict}
                            onInput={(e) => {
                                dispatch(setSubdistrict(e.target.value))
                                checkTambons(e.target.value);
                            }}
                            className='min-w-[211px] border-2 rounded p-1 '>

                            <option value=''>--</option>


                            {(Array.isArray(tambons) &&
                                tambons.length > 0 ? tambons : thai_tambons)
                                .map((ele, i) => (
                                    <option value={ele.name_th} key={i}>
                                        {ele.name_th}
                                    </option>
                                ))}
                        </select>
                        <label className='text-2xl absolute text-red-500 ml-2'>*</label>
                    </div>

                </div>
            </div>

            <div className='flexitemcenter gap-x-8 gap-y-4 flex-wrap lg:flex-nowrap'>
                <div className='flexitemcenter justify-between'>
                    <label>อำเภอ</label>
                    <div className='relative'>
                        <select
                            id='district'
                            value={district}
                            onChange={(e) => {
                                dispatch(setDistrict(e.target.value))
                                checkAmphures(e.target.value);
                            }}
                            className='border-2 rounded p-1 lg:min-w-[211px] max-w-[211px] lg:ml-[2.2rem]'
                        >

                            <option value=''>--</option>


                            {(Array.isArray(amphures) && amphures.length > 0 ? amphures : thai_amphures).map(({ name_th }, i) => (
                                <option value={name_th} name={i} key={i}>
                                    {name_th}
                                </option>
                            ))}
                        </select>
                        <label className='text-2xl absolute text-red-500 ml-2'>*</label>
                    </div>
                </div>

                <div className='flexitemcenter '>
                    <label>จังหวัด</label>
                    <div className='relative'>
                        <select id='province' value={province}
                            onInput={(e) => {
                                dispatch(setProvince(e.target.value));
                                checkProvinces(e.target.value)
                            }}
                            className='border-2 rounded p-1 lg:ml-4 lg:min-w-[211px]'>
                            <option value=''>--</option>

                            {(Array.isArray(provinces) && provinces.length > 0
                                ? provinces : thai_provinces).map((ele, i) => (
                                    <option value={ele?.name_th} key={i}>
                                        {ele?.name_th}
                                    </option>
                                ))}
                        </select>
                        <label className='text-2xl absolute text-red-500 ml-2'>*</label>
                    </div>
                </div>

                <div className='flexitemcenter'>
                    <label className='whitespace-nowrap'>รหัสไปรษณีย์</label>
                    <div className='relative'>
                        <select id='zipcode' value={zipcode ? zipcode : ''}
                            onInput={(e) => {
                                dispatch(setZipcode(e.target.value))
                                checkZipcode(e.target.value)
                            }
                            }
                            className='border-2 rounded p-1 lg:ml-4 lg:min-w-[86px]'>

                            <option value=''>--</option>


                            {(Array.isArray(tambons) && tambons.length > 0 ? tambons : thai_tambons)
                                .filter((tambon, index, self) => index === self.findIndex(t => t.zip_code === tambon.zip_code))
                                .map(({ zip_code }, i) => (
                                    <option value={zip_code} key={i}>
                                        {zip_code}
                                    </option>
                                ))}
                        </select>
                        <label className='text-2xl absolute text-red-500 ml-2'>*</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Address;
