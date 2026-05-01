import MembershipStatsCard from "@/components/profile/MembershipStatsCard";
import ProfileSummaryCard from "@/components/profile/ProfileSummaryCard";
import RecentActivity from "@/components/profile/RecentActivity";

const ProfileIndex = () => {
	return (
		<section className="w-full h-screen bg-slate-50">
			<div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 lg:grid-cols-[280px_1fr]">
				<div className="flex flex-col gap-6">
					<ProfileSummaryCard />
					<MembershipStatsCard />
				</div>

				<div className="flex flex-col gap-6">
					<RecentActivity />
				</div>
			</div>
		</section>
	);
};

export default ProfileIndex;
