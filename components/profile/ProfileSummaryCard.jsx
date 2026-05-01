import GreenButton from "@/components/Shared/Button/GreenButton";

const ProfileSummaryCard = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 text-xl font-semibold text-emerald-900">
            EV
          </div>
          <span className="absolute bottom-1 right-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#1F6F5F]" />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">Eleanor Vance</p>
          <p className="text-xs text-slate-500">eleanor.vance@lumina-library.org</p>
        </div>
        <GreenButton text="Update Information" />
      </div>
    </div>
  );
};

export default ProfileSummaryCard;
