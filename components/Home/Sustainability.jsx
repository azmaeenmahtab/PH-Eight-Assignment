/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import sustainabilityImage from "@/assets/sustainability.jpeg";
import sustainabilityImage from "@/assets/nature.jpg";

const Sustainability = () => {
  return (
    <section className="py-14 bg-slate-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F2E2A]">
          <Image
            src={sustainabilityImage}
            alt="Forest path in a sustainable landscape"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 text-sm italic text-white/90">
            "A single digital device can hold a forest of knowledge without costing a
            single leaf."
          </p>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F3EE] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1F6F5F]">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1F6F5F] text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M12 2c.7 0 6 3.2 6 9.6C18 18 12.7 22 12 22S6 18 6 11.6C6 5.2 11.3 2 12 2zm0 4.2c-1.8 1-3.4 2.8-3.4 5.4 0 3.7 2.5 6.2 3.4 6.2s3.4-2.5 3.4-6.2c0-2.6-1.6-4.4-3.4-5.4z" />
              </svg>
            </span>
            Sustainability Corner
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-[#1B3B35]">
            Why digital reading is better for the planet
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            At Lumina Library, we believe that the pursuit of knowledge shouldn't
            come at the expense of our world.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#1F6F5F] text-[#1F6F5F]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M9.6 16.2L5.4 12l-1.4 1.4 5.6 5.6L20 8.6 18.6 7.2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1B3B35]">Zero Paper Waste</p>
                <p className="text-sm text-slate-600">
                  Save thousands of trees annually by eliminating physical book
                  production and shipping.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#1F6F5F] text-[#1F6F5F]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M9.6 16.2L5.4 12l-1.4 1.4 5.6 5.6L20 8.6 18.6 7.2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1B3B35]">Reduced Carbon Footprint</p>
                <p className="text-sm text-slate-600">
                  Our cloud-based infrastructure is optimized for energy efficiency
                  and powered by renewable energy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#1F6F5F] text-[#1F6F5F]">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M9.6 16.2L5.4 12l-1.4 1.4 5.6 5.6L20 8.6 18.6 7.2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1B3B35]">Unlimited Lifespan</p>
                <p className="text-sm text-slate-600">
                  Digital files never tear, fade, or require physical disposal,
                  ensuring perpetual access to wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
