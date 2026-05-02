export const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-200 bg-white">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-slate-500 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
                <div>
                    <p className="text-sm font-semibold text-[#1F6F5F]">Lumina Library</p>
                    <p className="mt-2 text-xs text-slate-400">
                        © 2024 Lumina Library, Sustainable digital reading.
                    </p>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Contact Us
                    </p>
                    <div className="mt-3 space-y-1 text-xs text-slate-500">
                        <p>Email: support@luminalibrary.com</p>
                        <p>Phone: +1 (555) 219-8840</p>
                        <p>Location: Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Follow Us
                    </p>
                    <nav className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                        <a href="https://facebook.com" className="transition-colors hover:text-slate-700">
                            Facebook
                        </a>
                        <a href="https://instagram.com" className="transition-colors hover:text-slate-700">
                            Instagram
                        </a>
                        <a href="https://x.com" className="transition-colors hover:text-slate-700">
                            X
                        </a>
                        <a href="https://linkedin.com" className="transition-colors hover:text-slate-700">
                            LinkedIn
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};