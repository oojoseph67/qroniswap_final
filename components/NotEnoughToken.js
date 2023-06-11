import { useAddress, useMetamask, ConnectWallet } from "@thirdweb-dev/react";

function Login({
  tokenBalanceBal,
  tokenSymbol,
  tokenName,
}) {
  return (
    <div className="bg-[#091818] min-h-screen flex flex-col items-center justify-center text-center">
      <img
        className="rounded-full h-56 w-56 mb-10"
        src="/logo/caishenKinBig.png"
        alt="image"
      ></img>
      <h1 className="text-6xl text-white font-bold">CaishenKin Lottery</h1>
      <br></br>
      <h2 className="text-white">
        {" "}
        Oops you have{" "}
        <b>
          {tokenBalanceBal}
          {tokenSymbol}
        </b>
        .. Only <b>{tokenSymbol}</b>Holders holding <b>1,000,000{tokenSymbol} </b>
        can participate in the lottery of the God.{" "}
      </h2>
      <button className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold">
        <a target="_blank" rel="noreferrer" href="#">
          Buy {tokenSymbol} Now
        </a>
      </button>
    </div>
  );
}

export default Login;
