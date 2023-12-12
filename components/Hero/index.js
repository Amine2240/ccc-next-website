import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <section
      style={
        {
          // backgroundImage: `url("../../public/gridherobg.svg")`,
          // backgroundImage: `url('https://www.figma.com/file/T3BWzbhD6sW1SOj2yL41la/%5BCCC%5D-Edition-1?type=design&node-id=281-19397&mode=design&t=Pmi0Aq6WA1Cyw8ej-4')`,
        }
      }
      className=" text-white bg-[rgb(22,22,21,1)] h-[100vh] pt-20 flex place-content-center items-start overflow-y-hidden relative"
    >
      <Image
        src="/gridherobg.svg"
        alt="background image"
        layout="fill"
        objectFit="cover"
        className=" mt-10 absolute z-[1]"
      />

      <Image
        src="/herofloatblue.svg"
        alt="background image"
        width={100}
        height={100}
        className=" mt-10 absolute top-[0%]  left-[4%] w-[30vw] lg:block hidden  scale-95 xl:scale-100"
      />
      <Image
        src="/herofloatgreen.svg"
        alt="background image"
        width={100}
        height={100}
        className=" mt-10 absolute bottom-[2%] left-0 w-[30vw] lg:block hidden scale-95 xl:scale-100"
      />
      <Image
        src="/herofloatyellow.svg"
        alt="background image"
        width={100}
        height={100}
        className=" mt-10 absolute right-[4%]  top-[28%] w-[30vw] lg:block hidden scale-95 xl:scale-100"
      />

      <div className=" flex flex-col items-center place-content-around md:h-[80vh] h-[70vh]">
        <div>
          <p className=" text-6xl md:text-7xl lg:text-8xl  xl:text-9xl  leading-[0.95] font-bold text-center">
            CSE Coding <br /> Contest
          </p>
          <p className=" text-[#35E6BB] text-xl md:text-2xl  xl:text-3xl text-center mt-5">
            {" "}
            \* Imagine a slogon hayl bezzaf here *\{" "}
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <p className=" flex text-2xl">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_292_28072)">
                <path
                  d="M24.5568 9.85829C23.3318 4.46829 18.6301 2.04163 14.5001 2.04163C14.5001 2.04163 14.5001 2.04163 14.4884 2.04163C10.3701 2.04163 5.65678 4.45663 4.43178 9.84663C3.06678 15.8666 6.75344 20.965 10.0901 24.1733C11.3268 25.3633 12.9134 25.9583 14.5001 25.9583C16.0868 25.9583 17.6734 25.3633 18.8984 24.1733C22.2351 20.965 25.9218 15.8783 24.5568 9.85829ZM14.5001 15.7033C12.4701 15.7033 10.8251 14.0583 10.8251 12.0283C10.8251 9.99829 12.4701 8.35329 14.5001 8.35329C16.5301 8.35329 18.1751 9.99829 18.1751 12.0283C18.1751 14.0583 16.5301 15.7033 14.5001 15.7033Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_292_28072">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className=" ml-2">ESHRA School - Ain Benain</span>
          </p>
          <p className="flex text-2xl mt-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 2.33337C7.57183 2.33337 2.3335 7.57171 2.3335 14C2.3335 20.4284 7.57183 25.6667 14.0002 25.6667C20.4285 25.6667 25.6668 20.4284 25.6668 14C25.6668 7.57171 20.4285 2.33337 14.0002 2.33337ZM19.0752 18.165C18.9118 18.445 18.6202 18.5967 18.3168 18.5967C18.1652 18.5967 18.0135 18.5617 17.8735 18.4684L14.2568 16.31C13.3585 15.7734 12.6935 14.595 12.6935 13.5567V8.77337C12.6935 8.29504 13.0902 7.89837 13.5685 7.89837C14.0468 7.89837 14.4435 8.29504 14.4435 8.77337V13.5567C14.4435 13.9767 14.7935 14.595 15.1552 14.805L18.7718 16.9634C19.1918 17.2084 19.3318 17.745 19.0752 18.165Z"
                fill="#FAFAFA"
              />
            </svg>
            <span className=" ml-2"> 05 - 06 December </span>
          </p>
        </div>
        <button className=" text-black bg-white h-14 rounded-lg px-5 md:w-60 w-80 capitalize font-bold text-xl z-10">
          register now
        </button>
      </div>
    </section>
  );
};

export default Index;
