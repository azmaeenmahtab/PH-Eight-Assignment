import Image from "next/image";
import Link from "next/link";
import libraryImage from "@/assets/library.jpg";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F7F4]">
      <div className="absolute inset-0">
        <Image
          src={libraryImage}
          alt="Library interior"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/10 to-white/0" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-30">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[#D7F0E7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1F6F5F]">
            Digital Sanctuary
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#1B3B35] md:text-5xl">
            Find Your Next Read
          </h1>
          <p className="mt-4 text-base leading-7 text-black">
            Explore a vast collection of curated digital literature. From timeless
            classics to modern masterpieces, your intellectual journey starts here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/books-all"
              className="rounded-full bg-[#1F6F5F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2FA084]"
            >
              Browse Now
            </Link>
            <button
              type="button"
              className="rounded-full border border-[#1F6F5F] px-6 py-3 text-sm font-semibold text-[#1F6F5F] transition-colors hover:bg-[#E9F4F0]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;