import React from "react";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Balance from "../components/Balance";
import CurrentPriceAndTransection from "../components/CurrentPriceAndTransection";

function DashBoard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" mx-auto bg-[#F3F3F7] w-full">
        <Nav />
        <Balance />
        <CurrentPriceAndTransection />
      </div>
    </div>
  );
}

export default DashBoard;
