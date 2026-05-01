const MembershipStatsCard = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-700">Membership Stats</h3>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Books Read</span>
          <span className="font-semibold text-[#1F6F5F]">42</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-slate-100">
          <div className="h-2 w-3/4 rounded-full bg-[#6FCF97]" />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>Current Loans</span>
        <span className="font-semibold text-slate-700">3 / 5</span>
      </div>
    </div>
  );
};

export default MembershipStatsCard;
