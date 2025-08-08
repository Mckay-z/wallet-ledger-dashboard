"use client";

import React, { useState, useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = ["Dashboard", "Transactions", "Reports", "Settings"];

  // Optional: close sidebar on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-21 left-0 h-150 w-64 bg-white border-r shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col p-4`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end mb-4 text-gray-600 hover:text-red-600 text-xl font-bold"
          aria-label="Close sidebar"
        >
          ×
        </button>
        <nav className="flex flex-col gap-2 mt-2">
          {menuItems.map((name) => {
            const isActive = activeItem === name;
            return (
              <button
                key={name}
                onClick={() => setActiveItem(name)}
                className={`flex items-center text-sm font-bold px-3 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-[#E6F2F6] text-[#3A6C7B]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#3A6C7B]"
                }`}
              >
                {name}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
