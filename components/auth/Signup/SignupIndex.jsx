"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GreenButton from "@/components/Shared/Button/GreenButton";
import libraryImage from "@/assets/biglibrary.webp";
import { authClient } from "@/lib/auth-client";


const SignupPageIndex = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleRegister = async (event) => {
        event.preventDefault();
        if (isLoading) return;
        setIsLoading(true);
        setErrorMessage("");

        const formdata = Object.fromEntries(new FormData(event.currentTarget));

        console.log(formdata);

        try {
            const { data, error } = await authClient.signUp.email({
                name: formdata.name, // required
                email: formdata.email, // required
                password: formdata.password, // required
                image: formdata.photoUrl || undefined,
                // callbackURL: "https://example.com/callback",
            });
            if (error) {
                setErrorMessage(error.message || "Signup failed. Please try again.");
                return;
            }
            if (!error) {
                router.push("/home");
            }
            console.log(data);
        } catch (err) {
            setErrorMessage("Signup failed. Please try again.");
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
                        alt="Library interior"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0B3B32]/55" />
                    <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8 text-white">
                        <h2 className="text-2xl font-semibold">
                            Join our sustainable digital community.
                        </h2>
                        <p className="text-sm text-white/80">
                            Access over 50,000 digital titles and become part of a
                            global reader network focused on intellectual growth.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-[#1F6F5F]">
                            Create an Account
                        </h1>
                        <p className="text-sm text-slate-500">
                            Start your journey through the Lumina Library today.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={async () => {
                            setErrorMessage("");
                            try {
                                const { error } = await authClient.signIn.social({
                                    provider: "google",
                                });
                                if (error) {
                                    setErrorMessage(
                                        error.message || "Google signup failed."
                                    );
                                    return;
                                }
                                router.push("/home");
                            } catch (err) {
                                setErrorMessage("Google signup failed.");
                            }
                        }}
                        className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
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

                    <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                        {errorMessage && (
                            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
                                {errorMessage}
                            </div>
                        )}
                        <label className="text-xs font-semibold text-slate-600">
                            Name
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        <label className="text-xs font-semibold text-slate-600">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        <label className="text-xs font-semibold text-slate-600">
                            Photo URL
                            <input
                                type="url"
                                name="photoUrl"
                                placeholder="https://example.com/photo.jpg"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        <label className="text-xs font-semibold text-slate-600">
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        

                        <label className="text-xs font-semibold text-slate-600">
                            Confirm Password
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="••••••••"
                                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            />
                        </label>

                        <GreenButton
                            type="submit"
                            text={isLoading ? "Registering..." : "Register"}
                            disabled={isLoading}
                        />
                    </form>

                    <p className="mt-6 text-center text-xs text-slate-500">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="font-semibold text-[#1F6F5F]"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignupPageIndex;