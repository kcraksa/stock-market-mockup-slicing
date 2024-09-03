"use client";
import Image from "next/image";
import TrendUp from "../icons/trendup";
import CaretRight from "../icons/caretright";
import { useState } from "react";
const GrossIncomeCard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Day");

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const tabs = ["Day", "Month", "Quarter", "FY 2024"];

  return (
    <div className="border border-[#E2E8F0] rounded-3xl my-3 p-5">
      <div className="flex justify-between items-center">
        <div className="text-[#475569] font-semibold">Gross Income</div>
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
          <div className="text-4xl font-semibold">$1,210,000</div>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-success-50 flex items-center gap-2">
              <TrendUp size="15" /> +4.4%
            </span>
            <span className="text-[#475569]">vs last year</span>
          </div>
        </div>
        <div className="flex items-end">
          <div className="bg-brand-5 p-3 rounded-full cursor-pointer">
            <CaretRight />
          </div>
        </div>
      </div>
      <div>
        <div className="my-1">
          <span>
            Less Expensive: <span className="text-red-950">-$608,950</span>
          </span>
        </div>
        <div className="my-1">
          <span>
            Net income: <span className="font-bold">$601,050</span>{" "}
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
export default GrossIncomeCard;
