import { useEffect, useState } from "react";
import Image from "next/image";
import {
  useDisconnect,
  useNetworkMismatch,
  useMetamask,
  useNetwork,
  useAddress,
  useBalance,
  ChainId,
} from "@thirdweb-dev/react";
import { shortenAddress } from "../utils/shortenAddress";
import Link from "next/link";

const Nav = ({ address, balance }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const disconnect = useDisconnect();
  const isMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // console.log("navbar address", address);

  const nativeTokenDetails = balance.data;
  const nativeTokenBalance = nativeTokenDetails?.displayValue;
  const nativeTokenName = nativeTokenDetails?.name;
  const nativeTokenSymbol = nativeTokenDetails?.symbol;
  const nativeTokenDecimals = nativeTokenDetails?.decimals;

  useEffect(() => {
    networkCheck();
  }, [address]);

  async function networkCheck() {
    if (isMismatched) {
      const { chainId } = await switchNetwork(ChainId.BinanceSmartChainMainnet);
      // console.log("navbar chainId", chainId);
    }
  }

  return (
    <div className="border-b border-gray-100 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between z-50">
          <div className="flex items-center">
            <Link href="/"
                aria-label="Qroniswap"
                title="CaishenKin Lottery"
                className="inline-flex items-center mr-8">
             
                <Image
                  src="/logo/caishenKinBig.png"
                  alt="CaishenKin logo"
                  width={80}
                  height={120}
                />
              
            </Link>
            {/* <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="#"
                  aria-label="trade"
                  title="trade"
                  className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  <span>Trade</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="text-gray-500 h-5 w-5 ml-2"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="earn"
                  title="earn"
                  className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  <span>Earn</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="text-gray-500 h-5 w-5 ml-2"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="win"
                  title="win"
                  className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  <span>Win</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="text-gray-500 h-5 w-5 ml-2"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul> */}
          </div>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-10 w-10 text-white"
                fill="currentColor"
              >
                <path d="M7 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V11c0-.8.3-1.5.9-2.1C5.5 8.3 6.2 8 7 8h34c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v26c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7Zm0-17.1h34v-6.45H7v6.45Z" />
              </svg> */}
            </li>
            <li>
              {!address ? (
                <Link href="/"
                    className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                    aria-label="Connect Wallet"
                    title="Connect Wallet">
                
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="h-10 w-10 text-white"
                      fill="currentColor"
                    >
                      <path d="M7 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V11c0-.8.3-1.5.9-2.1C5.5 8.3 6.2 8 7 8h34c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v26c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7Zm0-17.1h34v-6.45H7v6.45Z" />
                    </svg>
                    Connect Wallet
                 
                </Link>
              ) : (
                <Link href="/"
                    className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                    aria-label="Connect Wallet"
                    title="Connect Wallet"
                    onClick={disconnect}>
                 
                    Disconnect
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                  >
                    <path d="M7 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V11c0-.8.3-1.5.9-2.1C5.5 8.3 6.2 8 7 8h34c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v26c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7Zm0-17.1h34v-6.45H7v6.45Z" />
                  </svg>
                  {shortenAddress(address)} */}
                  
                </Link>
              )}
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-black rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link href="/"
                          aria-label="Qroniswap"
                          title="CaishenKin Lottery"
                          className="inline-flex items-center">
                       
                          <Image
                            src="/logo/caishenKinBig.png"
                            alt="CaishenKin logo"
                            width={80}
                            height={120}
                          />
                      
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-200" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    {/* <ul className="space-y-8">
                      <li>
                        <a
                          href="#"
                          aria-label="trade"
                          title="trade"
                          className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          <span>Trade</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="text-gray-500 h-5 w-5 ml-2"
                              fill="currentColor"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="earn"
                          title="earn"
                          className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          <span>Earn</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="text-gray-500 h-5 w-5 ml-2"
                              fill="currentColor"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-label="win"
                          title="win"
                          className="inline-flex items-center font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          <span>Win</span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="text-gray-500 h-5 w-5 ml-2"
                              fill="currentColor"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul> */}
                    <ul className="space-y-8">
                      <li className="mt-4"></li>
                      <li>
                        {!address ? (
                          <Link href="/"
                              className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                              aria-label="Connect Wallet"
                              title="Connect Wallet">
                           
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                className="h-10 w-10 text-white"
                                fill="currentColor"
                              >
                                <path d="M7 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V11c0-.8.3-1.5.9-2.1C5.5 8.3 6.2 8 7 8h34c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v26c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7Zm0-17.1h34v-6.45H7v6.45Z" />
                              </svg>
                              Connect Wallet
                           
                          </Link>
                        ) : (
                          <>
                            <Link href="/"
                                className="rounded-[8px] [background:linear-gradient(95.08deg,_#9f2dfe,_#3bb2f9)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row p-[10px_18px] box-border items-center justify-center cursor-pointer hover:opacity-50"
                                aria-label="Connect Wallet"
                                title="Connect Wallet"
                                onClick={disconnect}>
                             
                                Disconnect
                                {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              className="h-10 w-10 text-white"
                              fill="currentColor"
                            >
                              <path d="M7 40c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V11c0-.8.3-1.5.9-2.1C5.5 8.3 6.2 8 7 8h34c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v26c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7Zm0-17.1h34v-6.45H7v6.45Z" />
                            </svg>
                            {shortenAddress(address)} */}
                             
                            </Link>
                          </>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
