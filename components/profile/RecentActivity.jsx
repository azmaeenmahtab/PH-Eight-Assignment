/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
import { getBorrowHistory } from "@/lib/borrow-history";

const PAGE_SIZE = 5;

const RecentActivity = () => {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setHistory(getBorrowHistory());
  }, []);

  const totalPages = Math.max(1, Math.ceil(history.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const pagedHistory = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return history.slice(start, start + PAGE_SIZE);
  }, [history, currentPage]);

  const formatBorrowedDate = (isoDate) => {
    if (!isoDate) return "Borrowed recently";
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "Borrowed recently";
    return `Borrowed on ${date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })}`;
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Recent Activity</h3>
      </div>

      {history.length === 0 ? (
        <p className="mt-5 text-sm text-slate-500">
          No borrow history yet. Borrow a book to see it here.
        </p>
      ) : (
        <div className="mt-5 flex flex-col gap-4">
          {pagedHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-100 to-emerald-300 text-xs font-semibold text-emerald-700">
                  BK
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">
                    {formatBorrowedDate(item.borrowedAt)}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Active
              </span>
            </div>
          ))}

          {history.length > PAGE_SIZE && (
            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
