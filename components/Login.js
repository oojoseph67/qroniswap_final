import { useAddress, useMetamask, ConnectWallet } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetamask = useMetamask(); // use metamask connector automatically
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
        Get Started By Logging in with your wallet{" "}
      </h2>
      <br></br>
      <br></br>
      {/* <button
        onClick={connectWithMetamask}
        className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
      >
        Login with Metamask
      </button> */}
      <ConnectWallet
        auth={{
          loginOptional: false,
        }}
        colorMode="light"
        accentColor="#ffffff"
      />
      ;{/* <ConnectWallet></ConnectWallet> */}
    </div>
  );
}

export default Login;
