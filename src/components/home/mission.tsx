import Image from "next/image";
import CigVape from "@/public/home/cigVape.png";
import { div } from "motion/react-m";

const Mission = () => {
  return (
    <div className="flex flex-row">
      <div className="bg-iesc-darkBrown-100 w-4/9">
        <Image src={CigVape} alt="Cigarette and Vape Image" className="p-3" />

        <p className="font-iesc-beVietnam text-iesc-lightYellow-50 p-7 text-center text-lg md:text-xl">
          Within the Inland Empire, over 32,000 residents do not possess access
          to substance use treatment — leaving many unable to acquire resources
          needed to facilitate recovery and healing.
        </p>
      </div>

      <div className="bg-iesc-red-100 w-5/9">
        <div className="font-iesc-passionOne text-iesc-lightYellow-50 mt-19 text-center text-4xl md:text-6xl lg:text-8xl">
          MISSION <br></br> AND VISION
        </div>

        <p className="font-iesc-beVietnam text-iesc-lightGray-50 p-7 text-center text-lg md:text-xl">
          mission: To address substance use disparities associated with tobacco,
          nicotine, and opioid dependence within the Inland Empire through a
          community-based public health initiative that integrates local
          data-driven research and digital prevention outreach to promote
          long-term community well-being.
        </p>

        <p className="font-iesc-beVietnam text-iesc-lightGray-50 px-7 text-center text-lg md:text-xl">
          vision: An IE in which members of the community are granted access
          towards supportive infrastructures that cultivate generational health
          through the provision of knowledge and accessible resources.
        </p>
      </div>
    </div>
  );
};

export default Mission;
