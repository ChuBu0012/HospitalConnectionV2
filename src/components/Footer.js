'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const { data: session } = useSession()
  const services = [
    { text: "บุคลากรทางการแพทย์", href: "/doctor" },
    { text: "บุคคลทั่วไป", href: "/user" },
  ];

  const data = [
    { text: "ข้อมูล_1", href: "/" },
    { text: "ข้อมูล_2", href: "/" },
  ];

  return (
    <footer className="bg-footer">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between p-12">
          <div>
            <h2 className="mb-6 font-semibold text-white uppercase">
              บริการของเรา
            </h2>
            <ul className="text-white font-medium">
              {services.map((service, index) => {
                const link = session ? session?.user?.name?.role == "Doctor" ? "/doctor" : "/user" : "/"
                return <li key={index} className="mb-4">
                  <Link href={link} className="hover:underline">
                    {service.text}
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-white uppercase">
              ข้อมูลของเรา
            </h2>
            <ul className="text-white font-medium">
              {data.map((item, index) => {
                return <li key={index} className="mb-4">
                  <Link href={item.href} className="hover:underline">
                    {item.text}
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-semibold text-white uppercase">
              ติดต่อเรา
            </h2>
            <ul className="text-white font-medium">
              <li className="mb-4">
                โทร.
                <Link href="tel:035707521" className="hover:underline">
                  035-707-521
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
