import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
    <div className="bg-[#0B0D17] text-gray-100">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <div className="md:max-w-md mb-10 sm:mb-0 overflow-hidden flex flex-col items-start justify-start gap-[40px]">
            <Link 
                aria-label="Company Logo"
                title="Company"
                className="inline-flex items-c enter"href="/">
                <Image
                  src="/logo/caishenKinBig.png"
                  alt="CaishenKin logo"
                  width={120}
                  height={120}
                />
            </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-base text-gray-100">
                Copyright © 2022 CaishenKin.
              </p>
              <p className="mt-4 text-base text-gray-100">
                All rights reserved
              </p>
            </div>
            <div className="mt-5 inline-flex items-start justify-center">
              <Link href="https://t.co/ucD4rIgK24"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5">
               
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 17"
                    className="h-7 w-7"
                  >
                    <path
                      fill="#fff"
                      d="M8.5 1.063a7.438 7.438 0 1 0 .001 14.876A7.438 7.438 0 0 0 8.5 1.062Zm2.29 10.975s-.185.464-.697.241l-1.896-1.453-1.164-.912.005-.042s3.4-3.057 3.54-3.186l.093-.158c.008-.158-.252 0-.252 0L5.914 9.389l-1.877-.632s-.288-.102-.316-.325c-.027-.223.325-.343.325-.343l7.46-2.926s.613-.269.613.177l-1.33 6.698Z"
                    />
                  </svg>
                
              </Link>
              <Link href="https://twitter.com/CaishkinFinance"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 mr-5">
             
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 33"
                    className="h-7 w-7"
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M0 16.287c0-8.836 7.163-16 16-16s16 7.164 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16Z"
                      clip-rule="evenodd"
                      opacity=".1"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="m15.52 13.292.034.554-.56-.068c-2.036-.26-3.816-1.141-5.326-2.621l-.74-.735-.19.543c-.402 1.209-.145 2.485.695 3.344.447.475.346.542-.426.26-.268-.09-.503-.158-.526-.124-.078.079.19 1.107.403 1.514.291.565.884 1.118 1.533 1.446l.549.26-.65.011c-.626 0-.648.011-.581.249.224.734 1.108 1.514 2.093 1.853l.693.237-.604.361a6.302 6.302 0 0 1-3 .837c-.503.01-.917.056-.917.09 0 .113 1.365.746 2.16.994 2.384.735 5.215.418 7.342-.836 1.51-.892 3.021-2.666 3.727-4.384.38-.915.76-2.587.76-3.39 0-.52.034-.587.66-1.208.37-.362.717-.757.784-.87.112-.215.101-.215-.47-.023-.951.34-1.085.294-.615-.215.347-.361.76-1.017.76-1.209 0-.033-.167.023-.357.125-.202.113-.65.282-.985.384l-.605.192-.548-.373c-.302-.203-.727-.43-.951-.497-.571-.158-1.444-.136-1.959.045-1.399.509-2.283 1.82-2.182 3.254Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                
              </Link>
            </div>
          </div>
          {/* <div className="overflow-hidden flex flex-col flex-wrap sm:flex-row items-start justify-between gap-[50px]  text-white">
						<div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
							<p className="font-semibold text-lg tracking-wide text-gray-100">
								Product
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Swap
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Staking
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Farming
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Liquidity
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										NFT
									</a>
								</li>
							</ul>
						</div>
						<div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
							<p className="font-semibold tracking-wide text-lg text-gray-100">
								Support
							</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Discord
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Tokenomics
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Audits
									</a>
								</li>
								<li>
									<a
										href="/"
										className="text-gray-100 transition-colors duration-300 hover:text-primary text-base"
									>
										Apply for listing
									</a>
								</li>
							</ul>
						</div>
						<div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
							<p className="font-semibold tracking-wide text-lg text-gray-100">
								Stay up to date
							</p>
							<div className="mt-2 space-y-2">
								<form className="block relative">
									<input
										placeholder="Email"
										required
										type="text"
										className="flex-grow w-full h-10 text-sm px-4 mb-3 transition duration-200 bg-gray-600 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-primary focus:outline-none focus:shadow-outline"
									/>
									<div className="absolute top-3 -right-3">
										<button
											type="submit"
											className="inline-flex items-center justify-center px-6 "
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 18 18"
												className="w-5 h-5"
											>
												<g clip-path="url(#a)">
													<path
														fill="#fff"
														fill-rule="evenodd"
														d="M17.03.97a.75.75 0 0 1 .178.778l-5.25 15a.75.75 0 0 1-1.393.057l-2.883-6.487-6.487-2.883a.75.75 0 0 1 .057-1.393l15-5.25a.75.75 0 0 1 .778.178ZM9.145 9.916l2.022 4.55 3.54-10.112-5.562 5.562Zm4.5-6.622L3.534 6.833l4.55 2.022 5.563-5.561Z"
														clip-rule="evenodd"
													/>
												</g>
												<defs>
													<clipPath id="a">
														<path fill="#fff" d="M0 0h18v18H0z" />
													</clipPath>
												</defs>
											</svg>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
