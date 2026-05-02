"use client";
import profilepic from "@/assets/profile.png";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
    faRightFromBracket,
     faBars,
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlelogout = async () =>{
        await authClient.signOut();
    }

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    const { data: session } = authClient.useSession();
    const userImage = session?.user?.image;


    return (
        <nav className="w-full border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-4 md:flex md:h-16 md:items-center md:gap-6 md:py-0">
                <div className="flex items-center justify-between">
                    <Link
                        href="/home"
                        className="text-2xl font-bold tracking-tight text-[#1F6F5F]"
                    >
                        Lumina Library
                    </Link>

                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition-colors hover:bg-slate-100 md:hidden"
                    >
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                    </button>
                </div>

                <div
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } mt-4 flex flex-col gap-5 md:mt-0 md:flex md:flex-1 md:flex-row md:items-center md:justify-between`}
                >
                    <div className="flex flex-col items-start gap-3 text-sm font-medium text-slate-500 md:flex-1 md:flex-row md:items-center md:justify-center md:gap-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={handleNavClick}
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

                    <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-end">

                        {session ? (
                            <>
                                <div className="flex items-center">
                                    <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-600">
                                        {userImage ? (
                                            <Image
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
                                onClick={handleNavClick}
                                className="text-sm font-semibold text-[#1F6F5F]"
                            >
                                Log in
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};