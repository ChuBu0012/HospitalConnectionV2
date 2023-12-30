"use client"
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Background from '@/components/background';
import Login from '@/components/login';
import closeloading from '@/components/closeloading';

export default function Home() {
  closeloading()
  return (
    <Navbar>
      <Background src={'/bg.png'}>
        <div className=" m-auto">
          <div className="flex flex-wrap items-center ">
            <div className="flex-[0 0 auto] w-full md:w-2/4"></div>
            <div className="flex-[0 0 auto] w-full md:w-2/4 flex flex-col items-center mt-8">
              <Login />
            </div>
          </div>
        </div>
      </Background>
    </Navbar>

  );
}
