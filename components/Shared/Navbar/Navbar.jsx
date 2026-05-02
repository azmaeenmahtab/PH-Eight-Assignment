"use client";
import profilepic from "@/assets/profile.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faMagnifyingGlass,
    faRightFromBracket,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const navItems = [
    { label: "Home", href: "/home" },
    { label: "All Books", href: "/books-all" },
    { label: "My Profile", href: "/profile" },
];

export const Navbar = () => {
    const pathname = usePathname();

    const handlelogout = async () =>{
        await authClient.signOut();
    }

    const { data: session } = authClient.useSession();
    const userImage = session?.user?.image;


    return (
        <nav className="w-full border-b border-slate-200 bg-white">
            <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4">
                <Link
                    href="/home"
                    className="text-2xl font-bold tracking-tight text-[#1F6F5F]"
                >
                    Lumina Library
                </Link>

                <div className="flex flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-500">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    isActive
                                        ? "text-[#1F6F5F] underline decoration-2 underline-offset-8"
                                        : "transition-colors hover:text-slate-800"
                                }
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="ml-auto flex items-center gap-4">
                    {/* <div className="relative hidden md:block">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="search"
                            placeholder="Search library..."
                            className="w-56 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                        />
                    </div> */}

                    {/* <button
                        type="button"
                        aria-label="View cart"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100"
                    >
                        <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
                    </button> */}

                    {session ? (
                        <>
                            <div className="flex items-center">
                                <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-600">
                                    {userImage ? (
                                        <img
                                            src={userImage}
                                            alt="profile image"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <Image
                                            src={profilepic}
                                            width={70}
                                            height={70}
                                            alt="profile image"
                                        />
                                    )}
                                </span>
                            </div>

                            <button
                                onClick={handlelogout}
                                type="button"
                                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
                            >
                                <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    className="h-4 w-4"
                                />
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="text-sm font-semibold text-[#1F6F5F]"
                        >
                            Log in
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};