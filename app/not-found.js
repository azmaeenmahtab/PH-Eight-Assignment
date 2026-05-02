import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F1EA] px-4 py-16">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#6FCF97]/35 blur-3xl" />
      <div className="absolute -bottom-24 right-6 h-64 w-64 rounded-full bg-[#1F6F5F]/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-xl backdrop-blur sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#1F6F5F]">
          Lost in the stacks
        </p>
        <h1 className="mt-4 text-6xl font-semibold tracking-tight text-[#1B3B35] sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          This chapter does not exist. Try a different shelf or return home.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/home"
            className="inline-flex items-center justify-center rounded-full bg-[#1F6F5F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2FA084]"
          >
            Return Home
          </Link>
          <Link
            href="/books-all"
            className="inline-flex items-center justify-center rounded-full border border-[#1F6F5F] px-6 py-3 text-sm font-semibold text-[#1F6F5F] transition-colors hover:bg-[#E9F4F0]"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </section>
  );
}