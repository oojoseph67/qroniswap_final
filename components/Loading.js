import React from "react";
import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="bg-[#091818] min-h-screen flex flex-col items-center justify-center text-center">
      <img
        className="rounded-full h-56 w-56 mb-10"
        src="/logo/caishenKinBig.png"
        alt="image"
      ></img>
      <h1 className="text-6xl text-white font-bold">Connecting..</h1>
      <br></br>
      <h2 className="text-4xl text-white">
        {" "}
        Loading CaishenKin Lottery...
      </h2>
      <PropagateLoader color="white"></PropagateLoader>
    </div>
  );
}

export default Loading;
