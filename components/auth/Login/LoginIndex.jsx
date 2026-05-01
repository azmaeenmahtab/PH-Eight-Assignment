"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GreenButton from "@/components/Shared/Button/GreenButton";
import libraryImage from "@/assets/library.jpg";
import { authClient } from "@/lib/auth-client";
// import { FontAwesomeIcon, fa-go } from "@fortawesome/react-fontawesome";

const LoginPageIndex = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        if (isLoading) return;

        setIsLoading(true);
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const rememberMe = formData.get("rememberMe") === "on";

        try {
            const { error } = await authClient.signIn.email({
                email,
                password,
                rememberMe,
            });
            if (error) {
                setErrorMessage(error.message || "Login failed. Please try again.");
                return;
            }
            router.push("/home");
        } catch (err) {
            setErrorMessage("Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <section className="flex w-full items-center justify-center px-4 py-12">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-[1.1fr_1fr]">
                <div className="relative min-h-80">
                    <Image
                        src={libraryImage}
                        alt="Library shelves"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0B3B32]/65" />
                    <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8 text-white">
                        <h2 className="text-2xl font-semibold">
                            A sanctuary for digital minds.
                        </h2>
                        <p className="text-sm text-white/80">
                            Access our curated collection of thousands of titles with a single
                            click. Your sustainable reading journey starts here.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-slate-900">
                            Login to Your Account
                        </h1>
                        <p className="text-sm text-slate-500">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    <button
                        onClick={async () => {
                            setErrorMessage("");
                            try {
                                const { error } = await authClient.signIn.social({
                                    provider: "google",
                                });
                                if (error) {
                                    setErrorMessage(
                                        error.message || "Google login failed."
                                    );
                                }
                            } catch (err) {
                                setErrorMessage("Google login failed.");
                            }
                        }}
                        type="button"
                        className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50 "
                    >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 text-xs font-bold text-slate-500">
                            G
                        </span>
                        Continue with Google
                    </button>
                    

                    <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
                        <span className="h-px flex-1 bg-slate-200" />
                        OR
                        <span className="h-px flex-1 bg-slate-200" />
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        {errorMessage && (
                            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
                                {errorMessage}
                            </div>
                        )}
                        <label className="text-xs font-semibold text-slate-600">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="m@example.com"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        <label className="text-xs font-semibold text-slate-600">
                            <span className="flex items-center justify-between">
                                Password
                                <Link
                                    href="/auth/forgot"
                                    className="text-xs font-medium text-[#1F6F5F]"
                                >
                                    Forgot password?
                                </Link>
                            </span>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        <label className="flex items-center gap-2 text-xs text-slate-500">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                className="h-4 w-4 rounded border-slate-300 text-[#1F6F5F] focus:ring-[#6FCF97]"
                            />
                            Remember me for 30 days
                        </label>

                        <GreenButton
                            type="submit"
                            text={isLoading ? "Logging in..." : "Login"}
                            disabled={isLoading}
                        />
                    </form>

                    <p className="mt-6 text-center text-xs text-slate-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-semibold text-[#1F6F5F]"
                        >
                            Register page
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginPageIndex;