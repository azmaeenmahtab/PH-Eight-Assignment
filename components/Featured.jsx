import Image from "next/image";
import { Books } from "@/lib/mockupdata";

const Featured = () => {
	const topRated = [...Books]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 4);

	return (
		<section className="py-12">
			<div className="mx-auto max-w-6xl px-4">
				<div className="mb-8 flex items-end justify-between gap-4">
					<div>
						<p className="text-lg font-semibold uppercase tracking-[0.2em] text-[#1F6F5F]">
							Featured Picks
						</p>
						<h2 className="mt-2 text-3xl font-semibold text-[#1B3B35]">
							Top Rated This Week
						</h2>
					</div>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{topRated.map((book) => (
						<article
							key={book.id}
							className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
						>
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

							<button
								type="button"
								className="mt-5 w-full rounded-xl border border-[#1F6F5F] px-4 py-2.5 text-sm font-semibold text-[#1F6F5F] transition-colors hover:bg-[#E9F4F0]"
							>
								View Details
							</button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Featured;
