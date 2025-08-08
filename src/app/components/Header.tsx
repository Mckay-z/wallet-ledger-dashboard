"use client";

import Image from "next/image";
import React from "react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  toggleSidebar,
}) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b bg-white relative">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar}>
          <Image src="/menu.png" alt="Menu" width={50} height={20} className="w-9 md:w-5" />
        </button>
        <Image src="/logo.png" alt="Logo" width={120} height={50} />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-lg px-2 py-1">
          <button
            onClick={() => setIsSearchOpen((prev) => !prev)}
            className="flex-shrink-0"
            aria-label="Toggle Search"
          >            <Image src="/search.png" alt="Search" width={25} height={25} />

          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 w-48 text-black sm:w-64 outline-none text-sm"
              autoFocus
            />
          )}
        </div>

        <button>
          <Image src="/grid.png" alt="Apps" width={25} height={25} />
        </button>

        {/* Profile */}
        <div className="relative">
          <button onClick={() => setIsProfileMenuOpen((prev) => !prev)}>
            <Image
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full border"
            />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 text-gray-600 bg-white shadow-lg border rounded-lg py-2 z-50">
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                Profile
              </button>
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                Settings
              </button>
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
