"use client";
import CountryOptions from "@root/components/country-options";
import GrossIncomeCard from "@root/components/gross-income-card";
import CloudArrowUp from "@root/components/icons/cloudarrowup";
import MagicWand from "@root/components/icons/magicwand";
import SliderHorizontal from "@root/components/icons/sliderhorizontal";
import NetAssetSummaryCard from "@root/components/net-asset-summary-card";
import PortofolioPerformance from "@root/components/portofolio-performance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.scss";

export default function Home() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const hideSearch = () => setShowSearch(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Detect clicks outside of the drawer
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);
  return (
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
            <Image src="/images/InAI.svg" width={50} height={50} alt="In AI" />
          </div>
          <div>
            <Image
              src="/icons/hamburger.svg"
              className="cursor-pointer"
              width={30}
              height={30}
              alt="Ricardo Kaka"
              onClick={toggleDrawer}
            />
          </div>
          <div
            ref={drawerRef}
            className={`fixed top-0 right-0 h-full bg-white transform ${
              isDrawerOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 w-full md:w-1/3`}
          >
            {/* Drawer content goes here */}
            <p className="p-4">Your drawer content</p>
            <button
              onClick={closeDrawer}
              className="absolute bottom-0 w-full py-2 bg-red-500 text-white hover:bg-red-700 transition-colors duration-150 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      </header>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Portofolio Dashboard</div>
          <div>
            {showSearch ? (
              <input
                type="text"
                placeholder="Search..."
                className="border p-1 rounded-full p-5"
                autoFocus
                onFocus={() => setShowSearch(true)}
                onBlur={hideSearch}
              />
            ) : (
              <Image
                src="/icons/search.svg"
                className="cursor-pointer"
                width={30}
                height={30}
                alt="Search"
                onClick={toggleSearch}
              />
            )}
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
        <NetAssetSummaryCard />
        <div className="flex gap-2">
          <button className="flex w-1/2 items-center justify-center bg-brand-60 rounded-full text-white py-2 gap-2">
            <div>
              <Image
                src="/icons/HandCoins.svg"
                width={20}
                height={20}
                alt="Plus"
              />
            </div>
            <div>Add new asset</div>
          </button>
          <button className="flex w-1/2 items-center justify-center rounded-full border border-slate-300 py-2 gap-2">
            <div>
              <Image
                src="/icons/Buildings.svg"
                width={20}
                height={20}
                alt="Plus"
              />
            </div>
            <div>Add new entity</div>
          </button>
        </div>
        <div>
          <PortofolioPerformance />
        </div>
        <div>
          <GrossIncomeCard />
        </div>
        <div className="my-5 border-b border-slate-300 py-4">
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
        <div className="flex gap-2 justify-center py-5">
          <div className="flex gap-2 items-center justify-center py-2 px-3 border border-slate-300 rounded-full">
            <SliderHorizontal />
            <span>Customise</span>
          </div>
          <div className="flex gap-2 items-center justify-center py-2 px-3 border border-slate-300 rounded-full">
            <CloudArrowUp />
            <span>Add Widget</span>
          </div>
        </div>
      </div>
    </main>
  );
}
