import Marquee from "react-fast-marquee";
import Banner from "./Banner";
import Featured from "../Featured";
import Sustainability from "./Sustainability";
import Community from "./Community";


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
              <div
                key={item.id}
                className="inline-flex items-center gap-3 whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-[#6FCF97]" />
                {item}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <Featured />
      <Sustainability />
      <Community />
    </div>
  );
};


export default HomeIndex;