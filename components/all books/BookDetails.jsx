"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Books } from "@/lib/mockupdata";
import { authClient } from "@/lib/auth-client";

const BookDetails = ({ bookId }) => {
    const router = useRouter();
    const params = useParams();
    const { data: session, isPending } = authClient.useSession();
    const resolvedBookId = bookId ?? params?.id;
    const book = Books.find((item) => String(item.id) === String(resolvedBookId));

    useEffect(() => {
        if (!isPending && !session && resolvedBookId) {
            router.replace(`/auth/login?redirect=/books-all/${resolvedBookId}`);
        }
    }, [session, isPending, router, resolvedBookId]);

    if (!resolvedBookId) {
        return (
            <section className="bg-[#F7F7F5] py-12">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <p className="text-sm text-slate-500">Loading book details...</p>
                </div>
            </section>
        );
    }

    if (!book) {
        return (
            <section className="bg-[#F7F7F5] py-12">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h1 className="text-2xl font-semibold text-[#1B3B35]">
                        Book not found
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        The book you are looking for does not exist.
                    </p>
                </div>
            </section>
        );
    }

    if (isPending) {
        return (
            <section className="bg-[#F7F7F5] py-12">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <p className="text-sm text-slate-500">Loading book details...</p>
                </div>
            </section>
        );
    }

    if (!session) {
        return (
            <section className="bg-[#F7F7F5] py-12">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <p className="text-sm text-slate-500">Redirecting to login...</p>
                </div>
            </section>
        );
    }

    const handleBorrow = () => {
        if (!session) {
            toast.info("Please log in to borrow this book.");
            router.push(`/auth/login?redirect=/books-all/${resolvedBookId}`);
            return;
        }

        toast.success("Borrow request sent. Check your profile for updates.");
    };

    return (
        <section className="bg-[#F7F7F5] py-12">
            <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_1.2fr] md:items-start">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F6F5F]">
                        {book.category}
                    </span>
                    <h1 className="mt-3 text-3xl font-semibold text-[#1B3B35]">
                        {book.title}
                    </h1>
                    <p className="mt-2 text-base text-slate-600">By {book.author}</p>

                    <p className="mt-6 text-sm leading-6 text-slate-600">
                        {book.description}
                    </p>

                    <div className="mt-6 rounded-2xl bg-[#F0F6F4] px-4 py-3 text-sm font-semibold text-[#1F6F5F]">
                        {book.available_quantity} copies left
                    </div>

                    <button
                        type="button"
                        onClick={handleBorrow}
                        className="mt-6 w-full rounded-full bg-[#1F6F5F] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2FA084]"
                    >
                        Borrow This Book
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;
