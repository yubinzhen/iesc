import Image from "next/image";
import IEMap from "@/public/home/ieMap.png";

const Welcome = () => {
  return (
    <div className="bg-iesc-lightYellow-50 flex flex-row">
      <div className="text-iesc-darkBrown-100 w-5/9 pl-10">
        <div className="font-iesc-passionOne mt-9 text-4xl md:text-6xl lg:text-8xl">
          WELCOME TO THE INLAND EMPIRE
        </div>

        <div className="font-iesc-beVietnam mt-3 text-lg font-bold md:text-xl">
          About the Inland Empire
        </div>
        <p className="font-iesc-beVietnam pr-16 text-lg md:text-xl">
          The IE, characterized by one of the fastest-growing regions within
          California, is home to approximately 4.6 million residents, many of
          whom are immigrants or identify as Hispanic or Latino.
        </p>

        <div className="font-iesc-beVietnam mt-5 text-lg font-bold md:text-xl">
          Health in the IE
        </div>
        <p className="font-iesc-beVietnam pr-16 text-lg md:text-xl">
          The Inland Empire exhibits unique public health challenges, with
          higher rates of tobacco, nicotine, and opioid use compared to other
          regions within California.
        </p>

        <div className="font-iesc-beVietnam mt-5 text-lg font-bold md:text-xl">
          Community in Action
        </div>
        <p className="font-iesc-beVietnam pr-16 text-lg md:text-xl">
          The IE is home to an extensive network of non-profit organizations,
          local clinics, and community centers that support local residents in
          prevention, recovery, and education.
        </p>
      </div>

      <div className="w-4/9">
        <Image src={IEMap} alt="Inland Empire Map" className="p-10" />
      </div>
    </div>
  );
};

export default Welcome;
