"use client";
import Image from "next/image";
import TrendUp from "../icons/trendup";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NetAssetSummaryCard = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="bg-purple-70 my-6 rounded-3xl p-5 relative">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">Net Asset</div>
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
      <div className="flex justify-between items-center my-3 pr-4">
        <div>
          <div className="text-white text-4xl">$74,769,618</div>
          <div className="flex gap-2 my-3">
            <div className="flex items-center px-2 py-1 bg-success-5 rounded-full gap-2 text-success-50">
              <TrendUp size="15" />
              <span className="text-sm">+0.1%</span>
            </div>
            <div className="flex items-center px-2 py-1 bg-white rounded-full gap-2 text-sm">
              last day
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/icons/CaretRight.svg"
            width={25}
            height={25}
            alt="Net Asset"
            className="cursor-pointer"
            onClick={() => {
              router.push("/net-asset");
            }}
          />
        </div>
      </div>
      <div>
        <span className="text-white md:text-lg">
          Gross assets: <span className="font-bold">$78,789,618</span>
        </span>
      </div>
      <div className=" mt-2">
        <span className="text-white md:text-lg">
          Liabilities: <span className="text-destructive-30">$78,789,618</span>
        </span>
      </div>
    </div>
  );
};
export default NetAssetSummaryCard;
