import ExploreCard from "@/components/home/exploreCard";

const cards = [
  {
    title: "Tobacco: Health Risks & Local Impact",
    description:
      "Understand the risks of tobacco and the associated of threat of secondhand smoke, while exploring resources for prevention and cessation.",
    color: "bg-iesc-lightAzure-100",
  },
  {
    title: "Nicotine: Addiction & Emerging Trends",
    description:
      "Explore the increased prevalence of vaping amongst youth demographics, and strategies to reduce dependence in local communities.",
    color: "bg-iesc-vividRed-200",
  },
  {
    title: "Opioids: Impact & Community Response",
    description:
      "Recognize the opioid crisis within IE communities, and the critical, life-saving role of naloxone in countering the risks of overdose.",
    color: "bg-iesc-darkBrown-100",
  },
];

const Explore = () => {
  return (
    <div className="bg-iesc-pastelGray-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="font-iesc-passionOne text-iesc-red-100 text-center text-4xl md:text-6xl lg:text-8xl">
          EXPLORE
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <ExploreCard
              key={card.title}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
