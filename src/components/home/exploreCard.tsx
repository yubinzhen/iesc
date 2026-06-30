import Link from "next/link";

interface ExploreCardProps {
  title: string;
  description: string;
  color: string;
}

const ExploreCard = ({ title, description, color }: ExploreCardProps) => {
  return (
    <div className="mx-auto max-w-[300px]">
      <div
        className="bg-iesc-lightYellow-50 flex h-full flex-col overflow-hidden p-3 shadow-[0_10px_30px_rgba(64,31,24,0.16)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)" }}
      >
        <div className={`h-36 shrink-0 rounded-[16px] ${color}`} />
        <div className="flex flex-1 flex-col justify-between pt-4 pb-6 text-center">
          <div>
            <div className="font-iesc-passionOne text-iesc-darkBrown-100 text-2xl">
              {title}
            </div>
            <p className="font-iesc-beVietnam text-iesc-darkBrown-100 mt-3 text-sm leading-6">
              {description}
            </p>
          </div>
          <Link
            href="#"
            className="bg-iesc-vividRed-200 text-iesc-lightYellow-50 hover:bg-iesc-darkBrown-100 mt-5 self-center rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
