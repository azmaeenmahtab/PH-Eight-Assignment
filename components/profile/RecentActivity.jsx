import Link from "next/link";

const activityItems = [
  {
    title: "The Silent Patient",
    subtitle: "Borrowed on Oct 12, 2024",
    status: "Active",
  },
  {
    title: "Atomic Habits",
    subtitle: "Returned on Oct 05, 2024",
    status: "Completed",
  },
];

const RecentActivity = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Recent Activity</h3>
        <Link
          href="/profile/history"
          className="text-xs font-semibold text-[#1F6F5F]"
        >
          View History
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {activityItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-300 text-xs font-semibold text-emerald-700">
                BK
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </div>
            <span
              className={
                item.status === "Active"
                  ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
                  : "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"
              }
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
