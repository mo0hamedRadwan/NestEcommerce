type featureItemPropsType = {
  feature: {
    img: string;
    title: string;
    description: string;
  };
};

export default function FeatureItem({ feature }: featureItemPropsType) {
  return (
    <div className="p-5 w-[300px] flex gap-x-4 bg-slate-100 rounded-lg">
      <img src={feature.img} alt="feature image" className="w-16 h-16" />
      <div className="">
        <h2 className="font-bold">{feature.title}</h2>
        <p className="">{feature.description}</p>
      </div>
    </div>
  );
}
