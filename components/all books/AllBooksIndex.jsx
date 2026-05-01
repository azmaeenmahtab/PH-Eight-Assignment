"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Books } from "@/lib/mockupdata";
import SidePanel from "./SidePanel";

const AllBooksIndex = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [availableOnly, setAvailableOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredBooks = useMemo(() => {
        const normalized = search.trim().toLowerCase();

        return Books.filter((book) => {
            const matchesCategory =
                selectedCategory === "All" || book.category === selectedCategory;
            const matchesAvailability = !availableOnly || book.available_quantity > 0;
            const matchesSearch =
                normalized.length === 0 ||
                book.title.toLowerCase().includes(normalized);

            return matchesCategory && matchesAvailability && matchesSearch;
        });
    }, [search, selectedCategory, availableOnly]);


    const totalPages = Math.max(1, Math.ceil(filteredBooks.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedBooks = filteredBooks.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    return (
        <section className="bg-[#F7F7F5] py-10">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
                    <SidePanel
                        selectedCategory={selectedCategory}
                        onSelectCategory={(category) => {
                            setSelectedCategory(category);
                            setCurrentPage(1);
                        }}
                        availableOnly={availableOnly}
                        onToggleAvailable={(value) => {
                            setAvailableOnly(value);
                            setCurrentPage(1);
                        }}
                    />

                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-semibold text-[#1B3B35]">
                                    Explore the Collection
                                </h1>
                                <p className="mt-1 text-sm text-slate-500">
                                    Showing {filteredBooks.length} titles in our current catalog.
                                </p>
                            </div>

                            <div className="relative w-full max-w-xs">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                                        <path d="M15.7 14.3l3.6 3.6-1.4 1.4-3.6-3.6a6 6 0 111.4-1.4zM10 15a5 5 0 100-10 5 5 0 000 10z" />
                                    </svg>
                                </span>
                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                        setCurrentPage(1);
                                    }}
                                    placeholder="Search by title..."
                                    className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                                />
                            </div>
                        </div>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {paginatedBooks.map((book) => (
                                <article
                                    key={book.id}
                                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="relative h-44">
                                        <Image
                                            src={book.image_url}
                                            alt={book.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1F6F5F]">
                                            {book.category}
                                        </span>
                                        <h3 className="mt-1 text-base font-semibold text-[#1B3B35]">
                                            {book.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">By {book.author}</p>

                                        <div className="mt-auto flex items-center justify-between pt-4">
                                            <Link
                                                href={`/books-all/${book.id}`}
                                                className="rounded-full bg-[#1F6F5F] px-4 py-2 text-xs font-semibold text-white"
                                            >
                                                Details
                                            </Link>
                                            <button
                                                type="button"
                                                aria-label="Bookmark"
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500"
                                            >
                                                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                                                    <path d="M6 3.5A2.5 2.5 0 018.5 1h7A2.5 2.5 0 0118 3.5v18l-6-3-6 3v-18z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2">
                            {Array.from({ length: totalPages }, (_, index) => {
                                const page = index + 1;
                                const isActive = page === currentPage;

                                return (
                                    <button
                                        key={page}
                                        type="button"
                                        onClick={() => setCurrentPage(page)}
                                        className={`h-9 w-9 rounded-full text-sm font-semibold transition-colors ${
                                            isActive
                                                ? "bg-[#1F6F5F] text-white"
                                                : "border border-slate-200 text-slate-500 hover:bg-slate-100"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllBooksIndex;