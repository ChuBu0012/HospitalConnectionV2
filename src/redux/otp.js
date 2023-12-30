import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sendedOTP: '',
    id: '',
    tel: '',
    totel: ''
};

export const otp = createSlice({
    name: "otp",
    initialState: initialState,
    reducers: {
        setSendedOTP: (state, actions) => {
            state.sendedOTP = actions.payload
        }, setId: (state, actions) => {
            state.id = actions.payload
        }, setTel: (state, actions) => {
            state.tel = actions.payload
        }, setTotel: (state, actions) => {
            state.totel = actions.payload
        }, setDefault: (state) => {
            state.id = ""
            state.sendedOTP = ""
            state.tel = ""
            state.totel = ""
        }
    },
});
export const { setSendedOTP, setId, setTel, setTotel, setDefault } = otp.actions;

export default otp.reducer;
