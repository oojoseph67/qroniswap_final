import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { ethers } from "ethers";
import lotteryABI from "../lottery/lotteryAbi.json";
import { ThirdwebSdk } from "@thirdweb-dev/sdk";
// import { readFileSync } from "fs";
import { shortenAddress } from "../utils/shortenAddress"
import Marquee from "react-fast-marquee";
import Link from "next/link";
import {
  useContractRead,
} from "@thirdweb-dev/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FinishedRound = ({
  contract,
  address,
  balance,
  lotteryRound,
  userTickets,
  onWithdrawWinnings,
  lotteryId,
  lotteryDetails,
}) => {
  const nativeTokenDetails = balance.data;
  const nativeTokenBalance = nativeTokenDetails?.displayValue;
  const nativeTokenName = nativeTokenDetails?.name;
  const nativeTokenSymbol = nativeTokenDetails?.symbol;
  const nativeTokenDecimals = nativeTokenDetails?.decimals;
  // console.log("nativeTokenDetails", nativeTokenDetails);

  console.log("dataRound", lotteryDetails);

  useEffect(() => {}, [balance, address]);

  return (
    <div className="relative px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <br></br>
      <br></br>
      <div className="max-w-lg sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 text-center sm:mb-0">
          <h2 className="mb-6  text-3xl self-stretch relative tracking-[-0.02em] leading-[60px] font-semibold inline-block text-white sm:text-6xl md:mx-auto">
            Rounds
          </h2>
        </div>
      </div>

      <Marquee className="bg-[#000000] p-5 mb-5" gradient={false} speed={100}>
        <div className="flex space-x-2 mx-18">
          <h4 className="text-white font-bold">
            {/* Last Winner: {lastWinner?.toString()} */}
          </h4>
          <h4 className="text-white font-bold">
            Previous Winnings:{" "}
            {/* {ethers.utils.formatEther(lastWinnerAmount)} */}
            {""}
            {nativeTokenSymbol}
          </h4>
        </div>
      </Marquee>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
                      : "text-gray-800 hover:opacity-50 hover:text-primary"
                  )
                }>
                {/* All history */}
                Round details
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
                      : "text-gray-800 hover:opacity-50 hover:text-primary"
                  )
                }>
                All history
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "[background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
                      : "text-gray-800 hover:opacity-50 hover:text-primary"
                  )
                }>
                Your history
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2 w-full flex flex-col justify-center items-center">
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[500px] h-[300px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}>
                <div className="w-full border-b border-gray-100  pb-4">
                  <div className="w-full flex justify-between items-start ">
                    <div className="items-start ">
                      <span className="inline-block font-semibold text-lg sm:text-2xl mr-3">
                        Round
                      </span>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-3 sm:py-3 sm:px-4 sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px]">
                        {lotteryId.toString()}
                      </span>
                    </div>
                  </div>
                  {/* <div className="mt-3 text-sm sm:text-base font-normal">
                    Drawn Nov 8, 2022, 3:00pm
                  </div> */}
                </div>
                <div className="my-5">
                  <div className="flex flex-col sm:flex-row flex-wrap  justify-center  items-center sm:justify-start">
                    {userTickets > 0 ? (
                      <div className="stats">
                        <p className="text-lg mb-2">
                          You have {userTickets} Tickets in this draw
                        </p>
                        <div className="flex max-w-sm flex-wrap gap-x-2 gap-y-2">
                          {Array(userTickets)
                            .fill("")
                            .map((_, index) => (
                              <p
                                key={index}
                                className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-2 sm:py-3 sm:px-4  sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px] mr-3">
                                {index + 1}
                              </p>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-align text-lg mb-2">
                          You have {userTickets} Tickets in this draw
                        </p>
                      </div>
                    )}

                    {/* <div>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-2 sm:py-3 sm:px-4  sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px] mr-3">
                        9
                      </span>
                    </div> */}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[750px] h-[450px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}>
                <div className="w-full border-b border-gray-100  pb-4">
                  <div className="w-full flex justify-between items-start ">
                    <div className="items-start ">
                      <span className="inline-block font-semibold text-lg sm:text-2xl mr-3">
                        Round
                      </span>
                      <span className="rounded-full [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] px-3 py-3 sm:py-3 sm:px-4 sm:text-lg text-sm font-semibold text-white w-[25px] sm:w-[48px] h-[25px] sm:h-[48px]">
                        {lotteryId.toString()}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-sm sm:text-base font-normal">
                    Last draw{" "}
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex flex-col sm:flex-row flex-wrap text-sm justify-center text-center items-center sm:justify-start">
                    <table className="shadow-lg border-collapse">
                      <thead>
                        <tr>
                          <th class="bg-blue-100 border text-left px-8 py-4">
                            {" "}
                            Round{" "}
                          </th>
                          <th class="bg-blue-100 border text-left px-8 py-4">
                            {" "}
                            Winner{" "}
                          </th>
                          <th class="bg-blue-100 border text-left px-8 py-4">
                            {" "}
                            Prize{" "}
                          </th>
                          <th class="bg-blue-100 border text-left px-8 py-4">
                            {" "}
                            Time{" "}
                          </th>
                          <th class="bg-blue-100 border text-left px-8 py-4">
                            {" "}
                            Claim Winnings{" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>{lotteryDetails.lotteryId}</th>
                          <th>
                            {lotteryDetails.lastWinnerAmount ===
                            "0x0000000000000000000000000000000000000000"
                              ? `${lotteryDetails.lastWinnerAmount}`
                              : "No Winner Yet"}
                          </th>
                          <th>{lotteryDetails.lastWinnerAmount}</th>
                          {/* <th>{lotteryDetails.firstTicketDrawn}</th> */}
                          <th>{lotteryDetails.winningTicketDrawn}</th>
                          <th>Button</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                className={classNames(
                  "relative rounded-[24px] [background:linear-gradient(139.38deg,_rgba(65,_70,_83,_0.4),_rgba(56,_61,_74,_0.1))] shadow-[0px_4px_24px_-1px_rgba(21,_24,_32,_0.2)] [backdrop-filter:blur(40px)] w-full sm:w-[500px] h-[320px] flex flex-col p-[40px_32px] box-border items-start justify-start gap-[40px] text-left"
                )}>
                <div className="w-full flex flex-col justify-center items-center text-center pb-4">
                  <h2 className="text-xl font-semibold leading-5">
                    Recent Transactions
                  </h2>
                  <div className="my-10">
                    {/* {winnings > 0 ? (
                      <>
                        <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
                          <p className="font-bold">
                            Winner Winner Chicken Dinner!
                          </p>
                          <p>
                            Total Winnings:{" "}
                            <p>
                              {ethers.utils.formatEther(winnings.toString())}{" "}
                              {nativeTokenSymbol}
                            </p>
                          </p>
                          <br></br>
                          <Link
                            href="/"
                            className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                            aria-label="Withdraw"
                            onClick={onWithdrawWinnings}
                            title="Withdraw"
                          >
                            Withdraw
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>No winnings yet but don`t give up keep playing</>
                    )} */}
                    {/* <p>No recent transactions</p> */}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};;

export default FinishedRound;
