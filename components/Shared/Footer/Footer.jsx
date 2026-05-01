export const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-semibold text-[#1F6F5F]">Lumina Library</p>
                    <p className="text-xs text-slate-400">
                        © 2024 Lumina Library, Sustainable digital reading.
                    </p>
                </div>

                <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                    <a href="/contact" className="transition-colors hover:text-slate-600">
                        Contact Us
                    </a>
                    <a href="/privacy" className="transition-colors hover:text-slate-600">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="transition-colors hover:text-slate-600">
                        Terms of Service
                    </a>
                    <a href="/faq" className="transition-colors hover:text-slate-600">
                        FAQ
                    </a>
                </nav>
            </div>
        </footer>
    );
};