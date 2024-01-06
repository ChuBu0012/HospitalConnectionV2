import { Children, useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Loading from "./loading";
import { useDispatch, useSelector } from "react-redux";
import { setopen } from "@/redux/statusloading";

export default function Navbar({ children }) {
  const statusloading = useSelector((state) => state.loading.loadingStatus)
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);
  
  const { data: session } = useSession()
  useEffect(() => { setDropdown(false); setMobile(false); }, [])
  const menuItems = [
    { text: "บริการ", dropdownItems: ["บุคคลากรทางการแพทย์", "บุคคลทั่วไป"], link: ['/doctor', '/user'] },
    { text: "ข้อมูลการรับบริการ" },
    { text: "สุขภาพ" },
    { text: "เกี่ยวกับเรา" },
    { text: "ออกจากระบบ" },
  ];

  const dispatch = useDispatch()

  return (
    <>
      {statusloading && <Loading />}
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" onClick={() => {
            location.pathname === '/' ? "" : dispatch(setopen())
          }} className="flex items-center">
            <img src="/logo.png" className="w-48" alt="Flowbite Logo" />
          </Link>
          <button
            type="button"
            onClick={() => setMobile(!mobile)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={`${mobile ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  {menuItem.dropdownItems ? (
                    <button
                      onClick={() => setDropdown(!dropdown)}
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500"
                    >
                      {menuItem.text}
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  ) : (
                    <Link href="#" onClick={() => {
                      menuItem.text === "signOut" ? signOut({ callbackUrl: '/' }) : "";
                    }} className={`${menuItem.text === "signOut" ? session ? "block" : "hidden" : ""} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black`}>
                      {menuItem.text}
                    </Link>
                  )}
                  {menuItem.dropdownItems && (
                    <div className={`z-10 ${dropdown ? "" : "hidden"} font-normal bg-white absolute rounded-lg shadow w-44`} id={`dropdownNavbar${index}`}>
                      <ul className="py-2 text-sm text-gray-700" aria-labelledby={`dropdownNavbarLink${index}`}>

                        <div>
                          {session?.user?.name?.role === "Doctor" && <li>
                            <Link href={menuItem.link[0]} onClick={() => {
                              location.pathname === menuItem.link[0] ? "" : dispatch(setopen())
                            }} className="block px-4 py-2 hover:bg-gray-100">
                              {menuItem.dropdownItems[0]}
                            </Link>
                          </li>}
                          {!session && <li>
                            <Link href={'/'} className="block px-4 py-2 hover:bg-gray-100">
                              เข้าสู่ระบบ
                            </Link>
                          </li>}
                          <Link href={'/user'} onClick={() => {
                            location.pathname === '/user' ? "" : dispatch(setopen())
                          }} className="block px-4 py-2 hover:bg-gray-100">
                            บุคคลทั่วไป
                          </Link>
                        </div>

                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
