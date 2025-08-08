"use client";

import { useState } from "react";
import Image from "next/image";

interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: number;
  type: "Credit" | "Debit";
}

const transactionsData: Transaction[] = [
  { id: 4, name: "Salary", date: "2023-10-01", amount: 3000, type: "Credit" },
  { id: 5, name: "Groceries", date: "2023-10-02", amount: -150, type: "Debit" },
  { id: 6, name: "Gym Membership", date: "2023-10-03", amount: -50, type: "Debit" },
  { id: 7, name: "Dinner", date: "2023-10-04", amount: -40, type: "Debit" },
  { id: 8, name: "Movie Tickets", date: "2023-10-05", amount: -30, type: "Debit" },
  { id: 9, name: "Rent", date: "2023-10-06", amount: -1200, type: "Debit" },
  { id: 10, name: "Utilities", date: "2023-10-07", amount: -100, type: "Debit" },
  { id: 11, name: "Car Payment", date: "2023-10-08", amount: -400, type: "Debit" },
  { id: 12, name: "Insurance", date: "2023-10-09", amount: -200, type: "Debit" },
];

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Transaction; direction: "asc" | "desc" } | null>(null);

  const requestSort = (key: keyof Transaction) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setTransactions(sorted);
  };

  const getArrow = (key: keyof Transaction) => {
    if (!sortConfig || sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  // Formatter for USD currency
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-lg text-black font-bold mb-4">Transactions</h2>
      <table className="w-full text-sm text-gray-800 text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="p-2 cursor-pointer" onClick={() => requestSort("name")}>
              Name {getArrow("name")}
            </th>
            <th className="p-2 cursor-pointer" onClick={() => requestSort("date")}>
              Date {getArrow("date")}
            </th>
            <th className="p-2 cursor-pointer" onClick={() => requestSort("amount")}>
              Amount {getArrow("amount")}
            </th>
            <th className="p-2 cursor-pointer" onClick={() => requestSort("type")}>
              Type {getArrow("type")}
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="p-2">{t.name}</td>
              <td className="p-2">{t.date}</td>
              <td className="p-2 font-medium">{currencyFormatter.format(t.amount)}</td>
              <td className="p-2">
                <span className="flex items-center gap-1 text-xs">
                  <Image
                    src={t.type === "Credit" ? "/gdot.png" : "/rdot.png"}
                    alt={t.type}
                    width={8}
                    height={8}
                    className="w-2 h-2"
                  />
                  {t.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
