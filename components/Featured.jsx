"use client";
import Image from "next/image";
import { Books } from "@/lib/mockupdata";
import Link from "next/link";
import { Card } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Featured = () => {
	const topRated = [...Books]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 6);

   

	return (
		<section className="py-12">
			<div className="mx-auto max-w-6xl px-4">
				<div className="mb-8 flex flex-col items-center gap-3 text-center md:flex-row md:items-end md:justify-between">
					<div className="mx-auto">
						<p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#1F6F5F]">
							Featured Picks
						</p>
						<h2 className="mt-2 text-3xl font-semibold text-[#1B3B35]">
							Top Rated This Week
						</h2>
					</div>
				</div>

				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 4 },
					}}
					className="pb-10"
				>
					{topRated.map((book) => (
						<SwiperSlide key={book.id} className="h-auto">
							<Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm">
								<div className="flex h-full flex-col p-4">
									<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
									<Image
										src={book.image_url}
										alt={book.title}
										className="h-60 w-full object-cover"
									/>
								</div>

								<div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500">
									<span className="rounded-full bg-[#DFF3EA] px-2.5 py-1 text-[10px] uppercase tracking-wide text-[#1F6F5F]">
										{book.category}
									</span>
									<span className="inline-flex items-center gap-1 text-[#B56457]">
										<svg
											aria-hidden="true"
											viewBox="0 0 20 20"
											className="h-3.5 w-3.5 fill-current"
										>
											<path d="M10 1.5l2.47 5 5.53.8-4 3.9.94 5.5L10 14.9 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
										</svg>
										{book.rating.toFixed(1)}
									</span>
								</div>

								<h3 className="mt-3 text-lg font-semibold text-[#1B3B35]">
									{book.title}
								</h3>
								<p className="text-sm text-slate-500">By {book.author}</p>

								<Link
									href={`/books-all/${book.id}`}
									className="mt-5 w-full text-center rounded-xl border border-[#1F6F5F] px-4 py-2.5 text-sm font-semibold text-[#1F6F5F] transition-colors hover:bg-[#E9F4F0]"
								>
									View Details
								</Link>
							</div>
						</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Featured;
