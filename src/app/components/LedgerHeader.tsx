"use client";

import { useState } from "react";
import Image from "next/image";
import SummaryCard from "./SummaryCard";
import TransactionsTable from "./TransactionTable";

export default function LedgerHeader() {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <div className="flex flex-col w-full min-h-screen bg-white px-6 py-4">
            {/* Top Row */}
            <div className="flex flex-col justify-between w-full">
                {/* Left: Title and Status */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl text-black font-semibold">Wallet Ledger</h1>
                        <span className="px-2 py-1 flex items-center gap-1.5 text-sm bg-gray-100 text-black rounded-full">
                            <Image
                                src="/gdot.png"
                                alt="Active"
                                width={9}
                                height={32}
                                className="rounded-full border"
                            /> 
                            Active
                        </span>
                    </div>

                    {/* Right: Share Button */}
                    <button className="px-4 py-1 text-md font-medium bg-[#4B8B9F] text-white rounded-full hover:bg-[#2c4952]">
                        Share
                    </button>
                </div>

                <div className="flex items-center gap-3 mt-5">
                    <div className="flex -space-x-3">
                        <Image src="/profile.png" alt="Ava" width={32} height={32} className="rounded-full border" />
                        <Image src="/avatar1.png" alt="Ava" width={32} height={32} className="rounded-full border" />
                        <Image src="/avatar2.png" alt="Liam" width={32} height={32} className="rounded-full border" />
                        <Image src="/avatar3.png" alt="Noah" width={32} height={32} className="rounded-full border" />
                    </div>
                    <p className="text-gray-500 text-sm">Ava, Liam, Noah +12 others</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 mt-4 border-b">
                {["Overview", "Transactions"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 font-medium cursor-pointer transition-colors ${
                            activeTab === tab
                                ? "border-b-2 border-[#437D8E] text-[#437D8E]"
                                : "text-gray-500 hover:text-gray-800"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "Overview" && (
                    <div className="text-gray-700 ">
                          {/* Summary section */}
      <section className="p-6">
        <h1 className="text-lg text-black font-semibold mb-2">Summary</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <SummaryCard title="Total Balance" value="$12,345" change="+5%" />
          <SummaryCard title="Total Credits" value="$7,890" change="+3%" />
          <SummaryCard title="Total Debits" value="$4,455" change="-2%" />
          <SummaryCard title="Transactions" value="150" change="+10%" />
        </div>
      </section>
                    </div>
                )}
                {activeTab === "Transactions" && (
                    <div className="text-gray-700 cursor-pointer">
                       
          {/* Transactions Table */}
          <TransactionsTable />
                    </div>
                )}
            </div>
        </div>
    );
}
