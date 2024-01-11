'use client'
import { getAccount } from "@/lib/helper";
import { setclose, setopen } from "@/redux/statusloading";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setopen())
    const checkAccount = await getAccount(name)
    const url = checkAccount != null ? '/doctor' : "/"

    const status = await signIn('credentials', {
      redirect: false,
      name: name,
      password: password,
      callbackUrl: url
    })

    if (status.ok) {
      dispatch(setopen())
      router.push(status.url);
      dispatch(setclose())
    } else {
      Swal.fire({
        icon: "error",
        title: "ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง",
        confirmButtonText:"ตกลง"
      });
    }
  };
  return (
    <div className={" h-full 2xl:w-4/6 lg:p-0 p-6 w-5/6 md:w-full lg:w-5/6 rounded-md bg-white/90 md:bg-transparent"}>
      <h1 className="text-4xl">เข้าสู่ระบบ</h1>

      <div className="mt-10 sm:w-full lg:max-w-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900">
              ชื่อผู้ใช้งาน
            </label>
            <div className="mt-2 flex items-center">
              <div className="border border-gray-300 border-r-0 rounded-s-md bg-gray-100 h-9 p-2 px-3 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <input
                id="username"
                name="username"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                autoComplete="username"
                required
                className="block w-full pl-4 rounded-e-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                        ring-inset ring-gray-300 outline-none placeholder:text-gray-400 sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between flex-wrap">
              <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
                รหัสผ่าน
              </label>
            </div>
            <div className="mt-2 flex items-center justify-center">
              <div className="border border-gray-300 border-r-0 rounded-s-md bg-gray-100 h-9 p-2 px-3 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-shield-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                  />
                </svg>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block pl-4 w-full rounded-e-md border-0 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
              />
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center">
              <input defaultChecked={true} type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
              <label htmlFor="remember" className="block ml-2 text-lg font-medium leading-6 text-gray-900">
                บันทึกรหัสผ่านของฉัน
              </label>
            </div>
            <div className="text-sm">
              <Link href="/register" className="font-semibold text-blue-700 hover:text-blue-500">
                ลงทะเบียนบุคลากรทางการแพทย์ ?
              </Link>
            </div>
          </div >

          <div>
            <button
              type="submit"
              className="flex lg:w-2/4 w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form >
      </div >
    </div >
  );
}
