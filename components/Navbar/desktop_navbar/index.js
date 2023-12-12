"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Index = ({ navbar_items, navbarbool, setnavbarbool }) => {
  const [i, seti] = useState(0);
  return (
    <nav className=" bg-[#0A0A0A] h-[10vh] text-white flex  place-content-between items-center fixed w-full z-30">
      <div className=" md:ml-20 ml-10 cursor-pointer">
        {/* <img src="" alt="" /> */}
        <Image src="/logo.svg" alt="logo" width={50} height={20} />
      </div>
      <ul className="md:flex hidden sm:flex-row flex-col h-fit w-80 place-content-between capitalize ml-24">
        {navbar_items.map((item) => {
          return (
            <li
              key={navbar_items.id}
              onClick={() => {
                seti(item.id);
              }}
              className={` w-fit transition-all duration-200  border-t-0 border-r-0 border-l-0 ${
                item.id == i
                  ? "text-green-400 border-green-500 border-2 "
                  : " text-white border-2 border-transparent"
              }  `}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          );
        })}
      </ul>
      <button className=" md:block hidden text-black bg-white h-10 rounded-lg px-5 capitalize font-bold hover:text-green-500 hover:border-2 border-green-500 transition-all mr-16">
        register now
      </button>
      <button
        onClick={() => {
          setnavbarbool(!navbarbool);
        }}
        className=" mr-10 block md:hidden relative"
      >
        <Image
          src="/closebutton.svg"
          alt="background image"
          width={40}
          height={40}
          className={` scale-150 absolute ${
            !navbarbool ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
        />

        <Image
          src="/menubutton.svg"
          alt="background image"
          width={40}
          height={40}
          className={` ${
            navbarbool ? "opacity-100" : "opacity-0"
          } transition-all`}
        />
      </button>
    </nav>
  );
};

export default Index;
