"use client";
import CountryOptions from "@root/components/country-options";
import NetAssetCard2 from "@root/components/net-asset-card-2";
import CloudArrowUp from "@root/components/icons/cloudarrowup";
import MagicWand from "@root/components/icons/magicwand";
import SliderHorizontal from "@root/components/icons/sliderhorizontal";
import Image from "next/image";
import { Suspense, useState } from "react";
import AssetClass from "@root/components/asset-class";

export default function Home() {
  const options = ["Asset class", "Entity", "Broker"];

  const [selectedTab, setSelectedTab] = useState<string>(options[0]);

  const categories = [
    { name: "Bank accounts", class: "cyan-50", totalAmount: "$100,000" },
    { name: "Managed funds", class: "orange-50", totalAmount: "$250,000" },
    { name: "Listed shares", class: "warning-30", totalAmount: "$500,000" },
    { name: "Unlisted shares", class: "gray-50", totalAmount: "$150,000" },
    { name: "Private equity", class: "orange-30", totalAmount: "$200,000" },
    { name: "Fixed Income", class: "gray-40", totalAmount: "$300,000" },
    { name: "Private Property", class: "teal-50", totalAmount: "$400,000" },
  ];

  // create json array data for field entity that have total amount, and it have child array
  // the entity is company/stock name
  const entity = [
    {
      name: "Company A",
      totalAmount: "$100,000",
      child: [
        { name: "Bank accounts", totalAmount: "$100,000" },
        { name: "Managed funds", totalAmount: "$250,000" },
        { name: "Listed shares", totalAmount: "$500,000" },
        { name: "Unlisted shares", totalAmount: "$150,000" },
        { name: "Private equity", totalAmount: "$200,000" },
        { name: "Fixed Income", totalAmount: "$300,000" },
        { name: "Private Property", totalAmount: "$400,000" },
      ],
    },
    {
      name: "Company B",
      totalAmount: "$100,000",
      child: [
        { name: "Bank accounts", totalAmount: "$100,000" },
        { name: "Managed funds", totalAmount: "$250,000" },
        { name: "Listed shares", totalAmount: "$500,000" },
        { name: "Unlisted shares", totalAmount: "$150,000" },
        { name: "Private equity", totalAmount: "$200,000" },
        { name: "Fixed Income", totalAmount: "$300,000" },
        { name: "Private Property", totalAmount: "$400,000" },
      ],
    },
  ];

  return (
    <Suspense>
      <main>
        <header className="text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <Image
                src="/images/ricardo-kaka.jpg"
                className="rounded-full"
                width={50}
                height={50}
                alt="Ricardo Kaka"
              />
            </div>
            <div>
              <Image
                src="/images/InAI.svg"
                width={50}
                height={50}
                alt="In AI"
              />
            </div>
            <div>
              <Image
                src="/icons/hamburger.svg"
                className="cursor-pointer"
                width={30}
                height={30}
                alt="Ricardo Kaka"
              />
            </div>
          </div>
        </header>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Portofolio Dashboard</div>
            <div>
              <Image
                src="/icons/search.svg"
                className="cursor-pointer"
                width={30}
                height={30}
                alt="Search"
              />
            </div>
          </div>
          <div className="text-center py-5">
            <button className="w-full rounded-full bg-black text-white p-3 text-xl font-bold flex items-center justify-center gap-2">
              <div>
                <Image
                  src="/icons/MagicWand.svg"
                  width={20}
                  height={20}
                  alt="Plus"
                />
              </div>
              <div>Ask AI assistant</div>
              <div>
                <Image
                  src="/icons/ArrowRight.svg"
                  width={20}
                  height={20}
                  alt="Plus"
                />
              </div>
            </button>
            <div className="text-xs mt-2 text-grey-50">
              E.g. : How much liquid assets I have in US account ?
            </div>
          </div>
          <CountryOptions />
          <div>
            <NetAssetCard2 />
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-2 text-grey-50">Group by:</div>
            <div className="flex gap-3 mt-2">
              {options.map((opt) => (
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
          </div>
          <div>
            {categories.map((category) => (
              <AssetClass
                key={category.name}
                title={category.name}
                className={category.class}
                total={category.totalAmount}
                data={entity}
              />
            ))}
          </div>
          <div className="my-5 py-4">
            <div className="font-bold text-lg">AI suggested queries</div>
            <div className="flex border border-slate-300 py-2 px-3 my-3 rounded-full gap-2 cursor-pointer">
              <MagicWand width={20} height={20} />
              <span>Listed shares balances per month?</span>
            </div>
            <div className="flex border border-slate-300 py-2 px-3 my-3 rounded-full gap-2 cursor-pointer">
              <MagicWand width={20} height={20} />
              <span>Liquid assets per account?</span>
            </div>
            <div className="flex border border-slate-300 py-2 px-3 my-3 rounded-full gap-2 cursor-pointer">
              <MagicWand width={20} height={20} />
              <span>What are current portfolio risks?</span>
            </div>
          </div>
        </div>
      </main>
    </Suspense>
  );
}
