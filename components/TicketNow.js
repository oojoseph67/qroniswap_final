import React, { useEffect } from "react";
import Image from "next/image";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Countdown from "react-countdown";
import { ethers } from "ethers";
import { shortenBalance } from "../utils/shortenBalance";
import { shortenAddress } from "../utils/shortenAddress";

const TicketNow = ({
  pricePool,
  balance,
  shortenBalanceDisplay,
  ticketPrice,
  quantity,
  setQuantity,
  ticketUserCanBuy,
  remainingTickets,
  userTickets,
  handleClick,
  priceData,
  address,
  tokenBalanceBal,
  tokenSymbol,
  tokenName,
  tokenDecimal,
}) => {

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const {
    data: expiration,
    isLoading,
    isLoadingExpiration,
  } = useContractRead(contract, "expiration");

  const handleTicketNumber = (event) => {
    const limit = 2;
    if (event.target.value > 10) {
      setQuantity("10");
    } else {
      setQuantity(event.target.value.slice(0, limit));
    }
  };

  const ticketNumberQuantity =
    Number(ethers.utils.formatEther(ticketPrice.toString())) * quantity;

  // console.log("ticket quantitly", quantity)
  // console.log("nativeTokenDetails", nativeTokenDetails);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="max-w-lg sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 text-center sm:mb-0">
            <h2 className="mb-6  text-3xl self-center relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-4xl md:mx-auto">
              Ticket Sales are CLOSED for this draw
            </h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-w-lg sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 text-center sm:mb-0">
            <h2 className="mb-6  text-3xl self-center relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-3xl md:mx-auto">
              Get your tickets now!
              <br></br>
              <p className="text-lg">
                Ticket Available: {remainingTickets?.toNumber()}
              </p>
            </h2>
            <h2 className="mb-6  text-3xl self-stretch relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-5xl md:mx-auto">
              <span className="[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {hours}
              </span>{" "}
              h{" "}
              <span className="[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {minutes}
              </span>{" "}
              m{" "}
              <span className="[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {seconds}
              </span>{" "}
              s
            </h2>
            <p className="relative text-2xl leading-[30px] inline-block">
              Until draw
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-lg sm:mx-auto lg:max-w-2xl">
          <Countdown date={new Date(expiration * 1000)} renderer={renderer} />
        </div>
        <div className="mt-10 display-center flex-col">
          <div className="relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[750px] h-[528px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left">
            <div className="w-full flex justify-between items-start pb-4 border-b border-gray-100">
              <div className="items-start ">
                <span className="text-lg">Ticket Price</span>
              </div>
              <div className="items-end ">
                <span className="text-lg">
                  {ticketNumberQuantity.toFixed(3)} {tokenSymbol}
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center items-center flex-col text-center">
              <h2 className="mb-6  text-3xl self-stretch relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-4xl md:mx-auto">
                Prize Pot
              </h2>
              <h3 className="text-2xl self-stretch relative tracking-[-0.02em] leading-[40px] font-semibold inline-block text-white sm:text-3xl [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                {pricePool == 0 ? (
                  <>No Price Pot Yet</>
                ) : (
                  <>
                    {pricePool &&
                      ethers.utils.formatEther(pricePool.toString())}{" "}
                    {""} {tokenSymbol}
                  </>
                )}
              </h3>
              <p className="text-base my-5">
                <p className="text-base my-5">Ticket Number</p>
                <input
                  className="bg-[#091B1B] px-10 py-1.5 group-hover:[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] transition-all ease-in duration-75 rounded-md text-white"
                  type="number"
                  min={1}
                  max={ticketUserCanBuy}
                  value={quantity}
                  // onChange={(e) => setQuantity(Number(e.target.value))}
                  onChange={handleTicketNumber}></input>
              </p>
              {/* <p className="text-base my-5">20,554 stars</p> */}
              <div className="block">
                <a className="relative inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 238 81"
                    className="w-52 h-32">
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
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9F2DFE" />
                        <stop offset="1" stopColor="#3BB2F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {userTickets == 10 ? (
                    <button
                      disabled
                      className="absolute left-[25px] group inline-flex items-center justify-center overflow-hidden text-sm border border-primary rounded-3xl">
                      <span className="px-10 py-1.5 transition-all ease-in duration-75  rounded-md">
                        Can`t buy more than 10 ticket
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={handleClick}
                      disabled={
                        expiration?.toString() < Date.now().toString() ||
                        remainingTickets?.toNumber() == 0 ||
                        userTickets == 10
                      }
                      className="disabled:text-gray-100 disabled:from-gray-600 disabled:to-gray-100 disabled:cursor-not-allowed absolute left-[25px] group inline-flex items-center justify-center overflow-hidden text-sm border border-primary rounded-3xl">
                      <span className="px-10 py-1.5 group-hover:[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] transition-all ease-in duration-75  rounded-md">
                        Buy {quantity} Tickets
                      </span>
                    </button>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 right-0 opacity-20 sm:opacity-90">
        <Image
          src="/blur/purple-right.png"
          alt="blur"
          width={300}
          height={400}
        />
      </div>
      <div className="absolute top-0 left-0 opacity-20 sm:opacity-90">
        <Image src="/blur/blue-left.png" alt="blur" width={300} height={400} />
      </div> */}
    </div>
  );
};

export default TicketNow;
