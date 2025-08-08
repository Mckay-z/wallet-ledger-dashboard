"use client"
import { useState } from "react";
import Header from "./components/Header";
import LedgerHeader from "./components/LedgerHeader";
import Sidebar from "./components/SideBar";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />
      <div className="bg-white flex flex-1">
        {/* Pass the state to Sidebar to control its visibility */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className="p-6 flex-1 bg-white flex flex-col gap-6 overflow-auto">
          <LedgerHeader />
          {/* Add other page content here */}
        </main>
      </div>
    </>
  );
}
