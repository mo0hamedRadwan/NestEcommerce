import FeatureItem from "./FeatureItem";
import { featuresData } from "./FeaturesData";

export default function FeaturesComponent() {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5 my-10 dark:text-slate-900">
      {featuresData.map((feature, index) => (
        <li key={feature.title} className={`${index >= 4 && "2xl:hidden"}`}>
          <FeatureItem feature={feature} />
        </li>
      ))}
    </ul>
  );
}
