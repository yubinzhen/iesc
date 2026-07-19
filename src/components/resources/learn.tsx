import Image from "next/image";
import Tabs from "@/public/resources/tabs.png";
import Magnify from "@/public/resources/magnify.png";

const Learn = () => {
  return (
    <div className="bg-iesc-pastelRed-100 flex flex-row pt-20 pb-9">
      <div className="w-4/9 px-10">
        <Image src={Tabs} alt="Tabs" className="mb-3 w-lg" />
      </div>

      <div className="w-5/9">
        <div className="font-iesc-passionOne text-iesc-lightYellow-50 text-center text-4xl md:text-6xl lg:text-8xl">
          LEARN AND ACCESS
        </div>

        <p className="font-iesc-beVietnam text-iesc-lightYellow-50 mx-auto mt-2 w-3/4 text-center text-lg md:text-xl">
          Through local insights and online resources, explore reliable, trusted
          information. Engage directly with efforts addressing substance use in
          the Inland Empire, while accessing educational materials, community
          services, and relevant statistics.
        </p>

        <Image
          src={Magnify}
          alt="Magnify"
          className="mx-auto mt-5 object-cover"
        />
      </div>
    </div>
  );
};

export default Learn;
