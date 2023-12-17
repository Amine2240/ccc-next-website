"use client";

import React from "react";
import { useState } from "react";

const Index = ({ navbar_items, navbarbool }) => {
  const [i, seti] = useState(0);
  return (
    <nav
      className={`${
        navbarbool ? "-translate-y-[100vh]" : "translate-y-[0]"
      } bg-[hsl(60,2%,8%)] h-[100vh] fixed z-20 w-full md:hidden flex flex-col place-content-evenly items-center transition-all ease-[cubic-bezier(0, 0, 0.13, 1.05)] duration-500`}
    >
      <ul className=" flex flex-col items-center  h-[60vh] w-80 place-content-around capitalize mt-10">
        {navbar_items.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                seti(item.id);
              }}
              className={` w-fit text-3xl mt-1 transition-all duration-200  border-t-0 border-r-0 border-l-0 ${
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
      <button className=" text-black bg-white h-14 rounded-lg px-5 w-60 capitalize font-bold text-xl z-10 md:mt-10">
        register now
      </button>
    </nav>
  );
};

export default Index;
