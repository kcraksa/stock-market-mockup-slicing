"use client";
import Image from "next/image";
import { useState } from "react";
import TrendUp from "../icons/trendup";

const PortofolioPerformance = () => {
  const [selectedTab, setSelectedTab] = useState<string>("All");

  const option = ["All", "Realised gains", "Unrealised gains"];

  return (
    <div className="my-5">
      <div className="text-xl font-semibold">Portofolio Performance</div>
      <div className="flex gap-3 mt-2">
        {option.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelectedTab(opt)}
            className={`rounded-full py-2 px-3 ${
              opt === selectedTab ? "bg-brand-5 text-brand-60" : ""
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <div>
        <div className="flex justify-between py-7 border-b border-slate-200 items-center">
          <div>Month</div>
          <div className="flex gap-2 items-center">
            <div>+$401,321</div>
            <div className="flex gap-1 items-center bg-success-50 rounded-full px-2 py-1 text-white">
              <div>
                <TrendUp size="15" />
              </div>
              <div>+0.5%</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-7 border-b border-slate-200 items-center">
          <div>Quarter</div>
          <div className="flex gap-2 items-center">
            <div>+$814,603</div>
            <div className="flex gap-1 items-center bg-success-50 rounded-full px-2 py-1 text-white">
              <div>
                <TrendUp size="15" />
              </div>
              <div>+1.1%</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-7 items-center">
          <div>FY 2024</div>
          <div className="flex gap-2 items-center">
            <div>+$3,285,372</div>
            <div className="flex gap-1 items-center bg-success-50 rounded-full px-2 py-1 text-white">
              <div>
                <TrendUp size="15" />
              </div>
              <div>+4.6%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortofolioPerformance;
