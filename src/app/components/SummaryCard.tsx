"use client";

import React from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, change }) => {
  const isPositive = change.startsWith("+");

  return (
    <div
      className={`
        bg-gray-100 flex flex-col gap-2 p-4 rounded-lg shadow-sm
        w-full max-w-xs
        sm:max-w-[250px] sm:h-[140px]
        `}
      style={{ minHeight: 140 }}
    >
      <h3 className="text-sm sm:text-base text-black font-bold mb-1 truncate">
        {title}
      </h3>
      <p className="text-xl sm:text-2xl text-black font-bold mb-1 truncate">
        {value}
      </p>
      <p
        className={`text-xs sm:text-sm font-medium truncate ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export default SummaryCard;
