import React from "react";
import Image from "next/image";
import { ethers } from "ethers";
import {
  useAddress,
  useMetamask,
  ConnectWallet,
  useContract,
} from "@thirdweb-dev/react";
import { useState, useEffect } from "react";

const Hero = ({
  pricePool,
  handleClick,
  remainingTickets,
  expiration,
  quantity,
  userTickets,
}) => {
  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="max-w-xl flex flex-col items-center text-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="mb-6  text-3xl self-stretch relative tracking-[-0.02em] leading-[72px] font-semibold inline-block text-white sm:text-5xl md:mx-auto">
              CaishenKin Lottery
            </h2>
            <div className="relative text-2xl leading-[30px] inline-block w-[768px]">
              Win Up To
            </div>
            <br></br>
            <div className="self-stretch relative tracking-[-0.02em] text-5xl leading-[55px] font-semibold [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mb-5 block">
              $100,000
            </div>
            <div className="relative text-2xl leading-[30px] inline-block w-[768px]">
              In Prizes!
            </div>
            <div className="mt-16">
              <a className="relative inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 238 81"
                  className="w-52 h-32"
                >
                  <path
                    fill="url(#a)"
                    fill-rule="evenodd"
                    d="M61.504 1H214c12.703 0 23 10.297 23 23v32.701c0 12.703-10.297 23-23 23H61.552v1H214c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H60.552a9.259 9.259 0 1 1-18.517 0H24C10.745 0 0 10.745 0 24v32.701c0 13.255 10.745 24 24 24h18.035a9.259 9.259 0 1 1 18.517 0h1c0-5.665-4.593-10.258-10.259-10.258-5.657 0-10.245 4.579-10.258 10.233V79.7H24c-12.703 0-23-10.297-23-23V24C1 11.297 11.297 1 24 1h16.983V0h.052c0 5.666 4.593 10.259 10.258 10.259 5.328 0 9.708-4.063 10.21-9.259Z"
                    clip-rule="evenodd"
                  />
                  <defs>
                    <linearGradient
                      id="a"
                      x1="12.102"
                      x2="265.195"
                      y1="20.175"
                      y2="86.593"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9F2DFE" />
                      <stop offset="1" stopColor="#3BB2F9" />
                    </linearGradient>
                  </defs>
                </svg>
                <button
                  onClick={handleClick}
                  disabled={
                    expiration?.toString() < Date.now().toString() ||
                    remainingTickets?.toNumber() == 0 ||
                    userTickets == 10
                  }
                  className="disabled:text-gray-100 disabled:from-gray-600 disabled:to-gray-100 disabled:cursor-not-allowed absolute left-[25px] group inline-flex items-center justify-center overflow-hidden text-sm border border-primary rounded-3xl"
                >
                  <span className="px-10 py-1.5 group-hover:[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] transition-all ease-in duration-75  rounded-md">
                    Buy Tickets
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:hidden lg:block absolute top-[-138.14px] left-[-380.97px] sm:w-[930.28px] h-[299.05px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 540 300"
        >
          <path
            stroke="url(#a)"
            stroke-linecap="round"
            stroke-width="1"
            d="M537.859 298.408c-8.461-.94-19.163-9.187-26.557-13.346-21.256-11.957-40.22-20.316-64.71-24.266-43.71-7.05-91.018-8.494-135.216-8.494-46.767 0-122.188 1.103-144.788-49.745-6.994-15.738-4.474-35.034-15.098-49.746-14.76-20.436-24.266-45.854-44.219-62.957-16.574-14.206-37.773-25.912-56.62-38.96-10.045-6.954-16.795-17.24-27.232-24.266C12.265 19.12 4.844 15.42 1.579 2.362"
          />
          <defs>
            <linearGradient
              id="a"
              x1="28.848"
              x2="622.975"
              y1="76.373"
              y2="172.141"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9F2DFE" />
              <stop offset="1" stopColor="#3BB2F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden md:hidden lg:block absolute rotate-[5deg] top-[-250.78px] right-[-440.79px] w-[930.13px] h-[100.96px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 545 402"
        >
          <path
            stroke="url(#a)"
            stroke-linecap="round"
            stroke-width="1"
            d="M2.291 400.247c10.893-.947 22.998-3.674 33.029-8.088 31.2-13.729 62.693-26.648 93.964-40.174 35.556-15.38 70.346-37.451 102.456-59.048 25.737-17.309 52.759-35.575 73.338-59.047 13.144-14.993 20.71-39.406 8.897-57.969-17.038-26.775-42.672 16.568-11.863 27.771 10.076 3.664 15.318-.744 25.614-3.64 24.153-6.793 46.419-13.988 64.036-32.894 16.69-17.912 38.503-34.329 50.958-55.407 10.219-17.293 25.235-34.775 37.613-50.69 18.89-24.286 36.275-45.37 63.092-58.777"
          />
          <defs>
            <linearGradient
              id="a"
              x1="29.806"
              x2="636.012"
              y1="101.775"
              y2="175.123"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9F2DFE" />
              <stop offset="1" stopColor="#3BB2F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden md:hidden lg:block absolute top-[430px] left-[-295.88px] w-[838px] h-[80.7px] text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 545 402"
        >
          <path
            stroke="url(#a)"
            strokeLinecap="round"
            strokeWidth="1"
            d="M2.291 400.247c10.893-.947 22.998-3.674 33.029-8.088 31.2-13.729 62.693-26.648 93.964-40.174 35.556-15.38 70.346-37.451 102.456-59.048 25.737-17.309 52.759-35.575 73.338-59.047 13.144-14.993 20.71-39.406 8.897-57.969-17.038-26.775-42.672 16.568-11.863 27.771 10.076 3.664 15.318-.744 25.614-3.64 24.153-6.793 46.419-13.988 64.036-32.894 16.69-17.912 38.503-34.329 50.958-55.407 10.219-17.293 25.235-34.775 37.613-50.69 18.89-24.286 36.275-45.37 63.092-58.777"
          />
          <defs>
            <linearGradient
              id="a"
              x1="29.806"
              x2="636.012"
              y1="101.775"
              y2="175.123"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9F2DFE" />
              <stop offset="1" stopColor="#3BB2F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="hidden md:hidden lg:block absolute top-[440.5px] left-[720.5px] w-[930px] h-[251px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 557 252"
        >
          <path
            stroke="url(#a)"
            stroke-linecap="round"
            stroke-width="1"
            d="M2 2c13.062 25.046 49.8 45.147 70.877 67.114 24.176 25.198 49.782 45.594 82.465 65.837 24.108 14.933 62.759 42.676 98.904 42.676 34.523 0 63.435-21.757 97.826-21.338 19.905.243 39.567 2.364 59.423 3.101 6.92.256 13.871-1.156 17.382 3.465 4.184 5.505 7.369 11.619 9.163 17.69 5.048 17.082 7.531 32.365 24.254 46.324 15.541 12.971 45.92 22.979 70.877 22.979 4.429 0 9.76.521 14.014-.365 2.363-.492 7.815-2.75 7.815-1.277"
          />
          <defs>
            <linearGradient
              id="a"
              x1="30.119"
              x2="634.878"
              y1="64"
              y2="183.995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9F2DFE" />
              <stop offset="1" stop-color="#3BB2F9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
