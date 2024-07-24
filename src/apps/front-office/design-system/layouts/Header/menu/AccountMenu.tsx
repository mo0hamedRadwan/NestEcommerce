import { Link } from "@mongez/react-router";
import { accountMenu } from "../constant/middleHeaderData";

export default function AccountMenu() {
  return (
    <div className="hidden group-hover:block absolute top-10 -left-[110px] w-[200px] z-10 rounded-lg bg-white dark:bg-slate-800  shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(255,255,255,0.4)]">
      <ul className="p-5 flex flex-col gap-y-3">
        {accountMenu.map(item => (
          <li
            key={item.name}
            className="text-slate-500 dark:text-stone-200 font-semibold hover:text-slate-900 dark:hover:text-white">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
