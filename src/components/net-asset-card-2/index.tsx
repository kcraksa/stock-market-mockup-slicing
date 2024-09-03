"use client";
import Image from "next/image";
import TrendUp from "../icons/trendup";
import CaretRight from "../icons/caretright";
import { useState } from "react";
const NetAssetCard2 = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Day");

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const tabs = ["Day", "Month", "Quarter", "FY 2024"];

  return (
    <div className="border border-[#E2E8F0] rounded-3xl my-3 p-5">
      <div className="flex justify-between items-center">
        <div className="text-[#475569] font-semibold">Net asset</div>
        <div>
          <Image
            src="/icons/DotsThreeOutlineVertical.svg"
            width={25}
            height={25}
            className="cursor-pointer"
            alt="More"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Lorem
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Ipsum
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex my-4 justify-between">
        <div>
          <div className="text-4xl font-semibold">$74,769,618</div>
          <div className="mt-1 flex items-center gap-2">
            <span>Returns: </span>
            <span className="text-success-50">+$3,285,372</span>
            <div className="flex items-center px-2 py-1 text-success-5 rounded-full gap-2 bg-success-50">
              <TrendUp size="15" />
              <span className="text-sm">+0.1%</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-1">
          <span>
            Realised gains: <span className="text-success-50">+$1,219,000</span>
          </span>
        </div>
        <div className="my-2">
          <span>
            Unrealised gains:{" "}
            <span className="text-success-50">+$2,066,372</span>{" "}
          </span>
        </div>
      </div>
      <div className="flex bg-[#F1F5F9] rounded-full p-2 justify-between">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`${
              selectedTab === tab
                ? "bg-white text-brand-50 shadow-lg"
                : "text-[#475569]"
            } px-3 py-1 rounded-full md:w-full`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NetAssetCard2;
