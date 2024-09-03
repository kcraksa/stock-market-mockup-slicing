"use client";
import React, { useState } from "react";
import Image from "next/image";

const CountryOptions = () => {
  const country = [
    { name: "Australia", code: "AUS", flag: "/icons/AusFlag.svg" },
    { name: "USA", code: "USA", flag: "/icons/USAFlag.svg" },
    { name: "Europe", code: "EU", flag: "/icons/EuFlag.svg" },
  ];

  const [defaultSelect, setDefaultSelect] = useState<string>("all");

  return (
    <div className="flex md:justify-start justify-between gap-1">
      <button
        value="all"
        onClick={() => setDefaultSelect("all")}
        className={`text-center flex items-center gap-1 p-2  ${
          defaultSelect === "all"
            ? "text-brand-50 border border-brand-50 rounded-full font-semibold"
            : ""
        }`}
      >
        <div>
          <Image
            src="/icons/Globe.svg"
            className="text-black"
            width={16}
            height={16}
            alt="World"
          />
        </div>
        <div>All</div>
      </button>
      <br />
      {country.map((c) => (
        <React.Fragment key={c.code}>
          <button
            value={c.code}
            className={`text-center flex items-center gap-1 p-2  ${
              defaultSelect === c.code
                ? "text-brand-50 border border-brand-50 rounded-full font-semibold"
                : ""
            }`}
            onClick={() => setDefaultSelect(c.code)}
          >
            <div>
              <Image
                src={c.flag}
                className="text-black"
                width={18}
                height={18}
                alt="World"
              />
            </div>
            <div>{c.name}</div>
          </button>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};
export default CountryOptions;
