import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idcard: "",
    prefix: "",
    name: "",
    sex: "",
    age: {
        days: 0,
        months: 0,
        years: 0,
    },
    birthday: {
        day: 0,
        month: 0,
        year: 0,
    },
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: 0,
    blood: "",
    allergic: "",
    tel: "",
    email: "",
};

export const Setform = createSlice({
    name: "Setform",
    initialState: initialState,
    reducers: {
        setIdcard: (state, action) => {
            state.idcard = action.payload;
        },
        setPrefix: (state, action) => {
            state.prefix = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSex: (state, action) => {
            state.sex = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setDay: (state, action) => {
            const day = action.payload;
            state.birthday.day = parseInt(day);
        },
        setMonth: (state, action) => {
            const month = action.payload;
            state.birthday.month = parseInt(month);
        },
        setYear: (state, action) => {
            const year = action.payload;
            state.birthday.year = parseInt(year);
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setSubdistrict: (state, action) => {
            state.subdistrict = action.payload;
        },
        setDistrict: (state, action) => {
            state.district = action.payload;
        },
        setProvince: (state, action) => {
            state.province = action.payload;
        },
        setZipcode: (state, action) => {
            state.zipcode = action.payload;
        },
        setBlood: (state, action) => {
            state.blood = action.payload;
        },
        setAllergic: (state, action) => {
            state.allergic = action.payload;
        },
        setTel: (state, action) => {
            state.tel = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }, setDefaults: (state) => {
            state.idcard = "";
            state.prefix = "";
            state.name = "";
            state.sex = "";
            state.age = 0;
            state.birthday = {
                day: 0,
                month: 0,
                year: 0,
            };
            state.address = "";
            state.subdistrict = "";
            state.district = "";
            state.province = "";
            state.zipcode = 0;
            state.blood = "";
            state.allergic = "";
            state.tel = "";
            state.email = "";
        }, setFormdata: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        }
    },
});

export const {
    setIdcard,
    setPrefix,
    setName,
    setSex,
    setAge,
    setDay,
    setMonth,
    setYear,
    setAddress,
    setSubdistrict,
    setDistrict,
    setProvince,
    setZipcode,
    setBlood,
    setAllergic,
    setTel,
    setEmail,
    setDefaults, setFormdata
} = Setform.actions;

export default Setform.reducer;
