type featureItemPropsType = {
  feature: {
    img: string;
    title: string;
    description: string;
  };
};

export default function FeatureItem({ feature }: featureItemPropsType) {
  return (
    <div className="py-5 w-full sm:w-[300px] flex gap-x-4 bg-slate-100 rounded-lg  group">
      <img
        src={feature.img}
        alt="feature image"
        className="w-16 h-16 duration-300 group-hover:-translate-y-2"
      />
      <div className="">
        <h2 className="font-bold">{feature.title}</h2>
        <p className="">{feature.description}</p>
      </div>
    </div>
  );
}
