"use client";

const categories = ["All", "Story", "Tech", "Science"];

const SidePanel = ({
	selectedCategory,
	onSelectCategory,
	availableOnly,
	onToggleAvailable,
}) => {
	return (
		<aside className="h-fit self-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
					Categories
				</p>

				<div className="mt-4 space-y-2">
					{categories.map((category) => {
						const isActive = selectedCategory === category;

						return (
							<button
								key={category}
								type="button"
								onClick={() => onSelectCategory(category)}
								className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
									isActive
										? "bg-[#1F6F5F] text-white"
										: "text-slate-600 hover:bg-slate-100"
								}`}
							>
								<span
									className={`inline-flex h-6 w-6 items-center justify-center rounded-lg border ${
										isActive
											? "border-white/40 bg-white/20"
											: "border-slate-200 bg-white"
									}`}
								>
									<span
										className={`h-2.5 w-2.5 rounded ${
											isActive ? "bg-white" : "bg-[#1F6F5F]"
										}`}
									/>
								</span>
								{category}
							</button>
						);
					})}
				</div>
			</div>

			<div className="mt-8">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
					Filters
				</p>
				<label className="mt-4 flex cursor-pointer items-center gap-3 text-sm text-slate-600">
					<input
						type="checkbox"
						checked={availableOnly}
						onChange={() => onToggleAvailable(!availableOnly)}
						className="h-4 w-4 rounded border-slate-300 text-[#1F6F5F] focus:ring-[#1F6F5F]"
					/>
					Available Now
				</label>
			</div>
		</aside>
	);
};

export default SidePanel;
