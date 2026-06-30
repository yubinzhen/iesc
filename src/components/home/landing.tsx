import Image from "next/image";
import HomeLanding from "@/public/home/homeLanding.png";

const Landing = () => {
  return (
    <div className="bg-iesc-lightYellow-50 flex flex-col px-15 pt-24">
      <div className="font-iesc-passionOne text-iesc-darkBrown-100 text-4xl md:text-6xl lg:text-8xl">
        THE INLAND EMPIRE <br></br>
        SUBSTANCE COLLECTIVE
      </div>

      <div className="font-iesc-beVietnam text-iesc-darkBrown-100 mt-2 w-1/2 text-lg md:text-xl">
        Creating conversation and advancing understanding of substance use
        through data-driven insights and community dialogue.
      </div>

      <Image src={HomeLanding} alt="Landing" className="mt-9 object-cover" />
    </div>
  );
};

export default Landing;
