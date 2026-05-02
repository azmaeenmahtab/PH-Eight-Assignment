"use client";

import { useEffect } from "react";
import Image from "next/image";
import GreenButton from "@/components/Shared/Button/GreenButton";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ProfileSummaryCard = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/auth/login?redirect=/profile");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Loading profile...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
        <p className="text-sm font-semibold text-slate-700">Redirecting...</p>
        <p className="mt-1 text-xs text-slate-500">
          Taking you to the login page.
        </p>
      </div>
    );
  }

  const displayName = user?.name || "Guest";
  const email = user?.email || "No email available";
  const avatarUrl = user?.image || "";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleUpdateClick = () => {
    router.push("/profile/update");
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-emerald-200 to-emerald-400 text-xl font-semibold text-emerald-900">
            {isPending ? (
              "..."
            ) : avatarUrl ? (
              <Image
                src={avatarUrl}
                alt="Profile"
                width={80}
                height={80}
                sizes="80px"
                className="h-full w-full object-cover"
                unoptimized
              />
            ) : (
              initials
            )}
          </div>
          <span className="absolute bottom-1 right-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#1F6F5F]" />
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">
            {isPending ? "Loading..." : displayName}
          </p>
          <p className="text-xs text-slate-500">
            {isPending ? "Fetching email..." : email}
          </p>
        </div>
        <GreenButton text="Update Information" onClick={handleUpdateClick} />
      </div>
    </div>
  );
};

export default ProfileSummaryCard;
