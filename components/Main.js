import React from "react";
import Nav from "./Nav";
import Loader from "./Loader";
import Image from "next/image";

const Main = ({ children, address, balance }) => {
	return (
		<div className="relative inset-0 flex flex-col bg-[#000000] z-40 backdrop-filter:blur(214px) w-full overflow-x-hidden text-white font-inter">
			<header className="z-50 mb-16">
				<Nav 
					address={address}
					balance={balance}
				/>
				<div className="absolute top-0 left-0 opacity-20 sm:opacity-90  w-[280px] h-[800px]">
					<Image
						src="/blur/purple.png"
						className="w-full h-full"
						alt="blur"
						layout="fill"
					/>
				</div>
				<div className="absolute top-0 right-0 opacity-20 sm:opacity-90">
					<Image src="/blur/blue.png" alt="blur" width={300} height={400} />
				</div>
			</header>
			<main className="relative overflow-hidden h-full">{children}</main>
			{/* <Loader /> */}
		</div>
	);
};

export default Main;
