"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Books } from "@/lib/mockupdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviewers = ["Marcus J.", "Sofia L.", "David W."];

const Community = () => {
	const topPicks = [...Books]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 3);

	return (
		<section className=" py-14">
			<div className="mx-auto max-w-6xl px-4">
				<div className="text-center">
					<h2 className="text-3xl font-semibold text-[#1B3B35]">
						Community Choice
					</h2>
					<p className="mt-2 text-sm text-slate-500">
						Monthly top-rated books by our global community of readers.
					</p>
				</div>

				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="mt-10 pb-10"
				>
					{topPicks.map((book, index) => {
						const filledStars = Math.round(book.rating);

						return (
							<SwiperSlide key={book.id} className="h-auto">
								<article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#0F2E2A] text-white shadow-lg">
									<span className="absolute right-4 top-4 z-10 rounded-full bg-[#1F6F5F] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
										Rank #{index + 1}
									</span>

									<div className="relative h-64">
										<Image
											src={book.image_url}
											alt={book.title}
											fill
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
									</div>

									<div className="flex flex-1 flex-col px-6 pb-6 pt-4">
										<div className="flex items-center gap-2 text-[#6FCF97]">
											{[...Array(5)].map((_, starIndex) => (
												<svg
													key={`${book.id}-star-${starIndex}`}
													aria-hidden="true"
													viewBox="0 0 20 20"
													className={`h-4 w-4 ${
														starIndex < filledStars
															? "fill-current"
															: "fill-transparent stroke-current"
													}`}
												>
													<path d="M10 1.5l2.47 5 5.53.8-4 3.9.94 5.5L10 14.9 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
												</svg>
											))}
											<span className="text-xs font-semibold text-white/80">
												{book.rating.toFixed(1)}
											</span>
										</div>

										<h3 className="mt-3 text-xl font-semibold">{book.title}</h3>
										<p className="text-sm text-white/70">By {book.author}</p>

										<p className="mt-3 text-sm text-white/70">
											"{book.description}"
										</p>

										<div className="mt-auto flex items-center gap-2 pt-4 text-xs text-white/70">
											<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
												<svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
													<path d="M10 2a5 5 0 015 5v1.2a4 4 0 01-2 3.4V13a3 3 0 01-6 0v-1.4a4 4 0 01-2-3.4V7a5 5 0 015-5z" />
												</svg>
											</span>
											Reviewed by {reviewers[index]}
										</div>
									</div>
								</article>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Community;
