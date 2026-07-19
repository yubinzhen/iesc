import Image from "next/image";
import Binder from "@/public/resources/binder.png";

const Digital = () => {
  return (
    <div className="bg-iesc-pastelGray-100 pb-9">
      <div className="font-iesc-passionOne text-iesc-lightYellow-50 py-8 text-center text-4xl md:text-6xl lg:text-8xl">
        DIGITAL & ONLINE RESOURCES
      </div>

      <Image src={Binder} alt="Binder" className="object-cover px-13" />
    </div>
  );
};

export default Digital;
