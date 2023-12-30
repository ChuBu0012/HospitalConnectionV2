import { configureStore } from "@reduxjs/toolkit";
import statusloading from "./statusloading";
import setform from "./setform";
import otp from "./otp";

export const store = configureStore({
  reducer: {
    loading: statusloading,
    setform: setform,
    otp: otp
  },
});
