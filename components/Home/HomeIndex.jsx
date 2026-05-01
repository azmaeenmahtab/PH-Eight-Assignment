import Marquee from "react-fast-marquee";
import Banner from "./Banner";
import Featured from "../Featured";


const promoItems = [
  "Special Discount on Memberships",
  "Exclusive: Author Interview with Haruki Murakami",
  "Lumina is now 100% Carbon Neutral",
  "New Arrivals: This Week's Picks",
  "Special Discount on Memberships",
  "Exclusive: Author Interview with Haruki Murakami",
];

const HomeIndex = () => {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <Banner />
      </div>

      <div className="w-full bg-[#1B3B35]">
        <Marquee
          gradient={false}
          speed={45}
          className="py-4 text-sm font-medium text-white"
        >
          <div className="flex items-center gap-8 px-6">
            {promoItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-3 whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-[#6FCF97]" />
                {item}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <Featured />
    </div>
  );
};


export default HomeIndex;