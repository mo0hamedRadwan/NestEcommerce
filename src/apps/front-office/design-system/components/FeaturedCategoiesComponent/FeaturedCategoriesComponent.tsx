import { Link } from "@mongez/react-router";
import { featuresBanners } from "./FeaturedCategoriesData";

export default function FeaturedCategoriesComponent() {
  return (
    <div className="py-5 flex flex-col gap-y-5">
      {/* Tab and slides */}
      <div>
        <h2 className="text-3xl font-bold">Featured Categories</h2>
      </div>

      <ul className="flex justify-between items-center flex-wrap md:flex-nowrap gap-5  text-slate-900">
        {featuresBanners.map((banner, index) => (
          <li
            key={banner.text1}
            className={`relative min-w-300 ${index === 2 && "hidden lg:block"}`}>
            <img src={banner.img} alt="" className="rounded-lg" />
            <div className="absolute w-80 md:w-52 xl:w-80  top-10 left-10">
              <h2 className="text-3xl md:text-lg xl:text-xl 2xl:text-3xl font-semibold mb-10 md:mb-5 xl:mb-10">
                {banner.text1}
                <br />
                {banner.text2}
              </h2>
              <Link
                to="/"
                className="px-6 md:px-4 xl:px-6  py-3 xl:py-3 md:py-2 bg-main-500 text-white rounded">
                Shop Now
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
