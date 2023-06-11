import React from "react";
import CriteriaSection from "../components/CriteriaSection";
import FinishedRound from "../components/FinishedRound";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import PlaySection from "../components/PlaySection";
import TicketNow from "../components/TicketNow";
import Login from "../components/Login";
import Loading from "../components/Loading";
import Loader from "../components/Loader";
import NotEnoughToken from "../components/NotEnoughToken";
import lotteryABI from "../lottery/lotteryAbi.json";
import tokenABI from "../lottery/tokenABI.json";
import {
  useContract,
  useMetamask,
  useDisconnect,
  useAddress,
  useContractData,
  useContractCall,
  useContractRead,
  useContractWrite,
  useBalance,
  ConnectWallet,
  useTokenBalance,
  useToken,
} from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
import axios from "axios";

const IndexPage = ({ priceData }) => {
  const [userTickets, setUserTickets] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [lotteryDetails, setLotteryDetails] = useState({
    firstTicketDrawn: "",
    lastWinner: "",
    lastWinnerAmount: "",
    lotteryId: "",
    winningTicketDrawn: "",
  });

  const address = useAddress(); // get connected wallet address
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  const { contract: tokenContract, isLoading: tokenIsLoading } = useContract(
    process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS,
    tokenABI
  );

  const { data: dataAllowance } = useContractRead(
    tokenContract,
    "allowance",
    "0x3D4a2A4891B7F31940Fe541Bea917C6084c69cBd",
    "0xf96c1F07805272C1C05ab470520f383358aD3125"
  );

  console.log("contract", contract);
  console.log("tokenContract", tokenContract);
  console.log("allowance", dataAllowance);

  const { data: tokenDetails } = useTokenBalance(tokenContract, address);
  console.log("token balance", tokenDetails);

  const tokenBalanceBal = tokenDetails?.displayValue;
  const tokenSymbol = tokenDetails?.symbol;
  const tokenName = tokenDetails?.name;
  const tokenDecimal = tokenDetails?.decimals;

  const ticketUserCanBuy = 10 - userTickets;
  // console.log(`ticket user can buy ${ticketUserCanBuy}`);

  const balance = useBalance();
  const shortenBalanceDisplay = balance.data?.displayValue.slice(0, 5);

  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: pricePool } = useContractRead(contract, "CurrentWinningReward");

  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");

  const { data: expiration } = useContractRead(contract, "expiration");

  const { data: tickets } = useContractRead(contract, "getTickets");

  const { mutateAsync: withdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );

  const { data: isLotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  const { data: lotteryRound } = useContractRead(contract, "lotteryId");
  if (lotteryRound) {
    console.log("lotteryId", lotteryRound);
  }

  async function lotteryData() {
    if (lotteryRound) {
      let details = lotteryRound.toString();
      const data1 = await contract?.call("lotteryDataDetails", [1]);
      setLotteryDetails({
        firstTicketDrawn: data1?.firstTicketBoughtTimestamp.toString(),
        lastWinner: data1?.lastWinner,
        lastWinnerAmount: data1?.lastWinnerAmount.toString(),
        lotteryId: data1?.lotteryId.toString(),
        winningTicketDrawn: data1?.winningTicketDrawnTimestamp.toString(),
      });
      // setLotteryDetails(data1)
      console.log("loteryyyyy", data1);
    }
  }

  // buying ticket function
  const handleClick = async () => {
    if (!ticketPrice) return;
    const notification = toast.loading("Buying your tickets");
    try {
      const allowance = await tokenContract?.call(
        "allowance",
        address,
        process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS
      );

      if (allowance.toString() === "0") {
        try {
          const approve = await tokenContract?.call(
            "approve",
            process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS
          );

          toast.success("Spending allowance approved", {
            id: notification,
          });

          console.log("approve", approve);
        } catch (e) {
          toast.error(`Whoops something went wrong`, {
            id: notification,
          });
          console.info("approve error", e);
        }
      }

      if (tokenBalanceBal < quantity * 10000000) {
        alert(`insufficient $CHANCE to buy ${quantity} tickets`);
        toast.error(`insufficient $CHANCE to buy ${quantity} tickets`, {
          id: notification,
        });
      } else {
        try {         
          let buyQuantity = BigNumber.from(quantity)
          console.log("buyQuantity", buyQuantity)
          const buy = await contract?.call("BuyTickets", [buyQuantity]);
          toast.success(`${quantity} tickets purchased successfully`, {
            id: notification,
          });
          console.log("buyTickets data", buy);
        } catch (e) {
          toast.error(`Whoops something went wrong`, {
            id: notification,
          });
          console.info("buyTicket error", e);
        }
      }
    } catch (err) {
      const error = err.Message;
      console.info("error error", error);
      toast.error(`Whoops something went wrong`, {
        id: notification,
      });
      console.info("contract call failure", err);
    }
  };

  // withdrawing commission function
  const onWithdrawWinnings = async () => {
    const notification = toast.loading("Withdrawing winnings...");
    try {
      const data = await withdrawWinnings([{}]);

      toast.success("Winnings withdraw successfully!", {
        id: notification,
      });
    } catch (err) {
      toast.error("Whoops something went wrong!", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  useEffect(() => {
    lotteryData();
  }, [lotteryRound]);

  useEffect(() => {
    if (!tickets) return;

    const totalTickets = tickets;
    // console.log(`bitch ${totalTickets}`)
    const noOfUserTickets = totalTickets.reduce(
      (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
      0
    );
    // console.log(`bitch ${noOfUserTickets}`);
    setUserTickets(noOfUserTickets);
    // listenToEvent()
  }, [tickets, address]);

  if (isLoading) return <Loading></Loading>;
  if (!address) return <Login></Login>;
  // if (tokenBalanceBal < 100000) return <NotEnoughToken
  //   tokenBalanceBal={tokenBalanceBal}
  //   tokenSymbol={tokenSymbol}
  //   tokenName={tokenName}
  // ></NotEnoughToken>

  return (
    <Main address={address} balance={balance}>
      <Hero
        handleClick={handleClick}
        expiration={expiration}
        remainingTickets={remainingTickets}
        quantity={quantity}
        userTickets={userTickets}
      />
      <PlaySection balance={balance} ticketPrice={ticketPrice} />
      <TicketNow
        pricePool={pricePool}
        balance={balance}
        shortenBalanceDisplay={shortenBalanceDisplay}
        quantity={quantity}
        setQuantity={setQuantity}
        ticketPrice={ticketPrice}
        ticketUserCanBuy={ticketUserCanBuy}
        remainingTickets={remainingTickets}
        userTickets={userTickets}
        handleClick={handleClick}
        expiration={expiration}
        priceData={priceData}
        address={address}
        tokenBalanceBal={tokenBalanceBal}
        tokenSymbol={tokenSymbol}
        tokenName={tokenName}
        tokenDecimal={tokenDecimal}
      />
      <FinishedRound
        address={address}
        balance={balance}
        userTickets={userTickets}
        contract={contract}
        onWithdrawWinnings={onWithdrawWinnings}
        lotteryId={lotteryRound}
        lotteryDetails={lotteryDetails}
      />
      {/* <CriteriaSection /> */}
      <Footer />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
  );

  const priceData = await res.json();

  return {
    props: {
      priceData,
    },
  };
};

export default IndexPage;
