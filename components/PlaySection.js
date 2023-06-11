import React from "react";
import Image from "next/image";
import {ethers} from "ethers"

const PlaySection = ({
	balance,
	ticketPrice,
}) => {
  const nativeTokenDetails = balance.data;
  const nativeTokenBalance = nativeTokenDetails?.displayValue;
  const nativeTokenName = nativeTokenDetails?.name;
  const nativeTokenSymbol = nativeTokenDetails?.symbol;
  const nativeTokenDecimals = nativeTokenDetails?.decimals;

  return (
    <div className="relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
      <div className="max-w-lg sm:mx-auto lg:max-w-xl">
        <div className="flex flex-col mb-16 text-center sm:mb-0">
          <h2 className="mb-6  text-3xl self-center relative tracking-[-0.02em] leading-60px] font-semibold inline-block text-white sm:text-4xl md:mx-auto">
            How to Play
          </h2>
          <p>
            If the digits on your ticket match the winning numbers n the correct
            order, you win a portion of the prize pool. Simple!
          </p>
        </div>
      </div>
      <div className="py-20 flex flex-col sm:flex-row flex-wrap items-start justify-start gap-[32px]">
        <div className="w-full sm:w-[320px] flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative mb-3">
            <Image
              src="/featured-icon.svg"
              width={56}
              height={56}
              alt="featured icon"
              className=""
            />
          </div>
          <h3 className="self-stretch relative text-lg mb-3 font-semibold inline-block">
            Buy Tickets
          </h3>
          <p className="self-stretch relative text-base  leading-[24px] text-gray-300 inline-block">
            Prices are set when the round starts,{" "}
            <b>
              {ticketPrice &&
                Number(ethers.utils.formatEther(ticketPrice.toString()))}
              {nativeTokenSymbol}
            </b>{" "}
            per ticket.
          </p>
        </div>
        <div className="w-full sm:w-[320px] flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative mb-3">
            <Image
              src="/featured-icon1.svg"
              width={56}
              height={56}
              alt="featured icon"
              className=""
            />
          </div>
          <h3 className="self-stretch relative text-lg mb-3 font-semibold inline-block">
            Wait for the draw
          </h3>
          <p className="self-stretch relative text-base  leading-[24px] text-gray-300 inline-block">
            There is one draw everyday alternating between 0 AM UTC and 12 PM
            UTC.
          </p>
        </div>
        <div className="w-full sm:w-[320px] flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative mb-3">
            <Image
              src="/featured-icon2.svg"
              width={56}
              height={56}
              alt="featured icon"
              className=""
            />
          </div>
          <h3 className="self-stretch relative text-lg mb-3 font-semibold inline-block">
            Check for prizes
          </h3>
          <p className="self-stretch relative text-base  leading-[24px] text-gray-300 inline-block">
            Once the round`s over, come back to the page and check to see if
            you`ve won!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaySection;
