import { Link } from "@mongez/react-router";
import { socialMediaLinks } from "../Header/constant/middleHeaderData";

export function CopyrightFooter() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-y-5 py-5">
      <p className="text-sm">
        <span>&copy; {new Date().getFullYear()}, </span>
        <strong className="text-main-500">Nest</strong>
        <span> - HTML Ecommerce Template </span>
        <br />
        <span>All rights reserved</span>
      </p>

      <ul className="hidden sm:flex items-center gap-x-5">
        <li className="flex items-center gap-x-2">
          <span className="text-[50px] text-main-500">
            <i className="bx bx-phone-call"></i>
          </span>
          <div className="flex flex-col">
            <p className="text-2xl text-main-500 font-bold">1900 - 6666</p>
            <p>Working 8:00 - 22:00</p>
          </div>
        </li>
        <li className="flex items-center gap-x-2">
          <span className="text-[50px] text-main-500">
            <i className="bx bx-phone-call"></i>
          </span>
          <div className="flex flex-col">
            <p className="text-2xl text-main-500 font-bold">1900 - 6666</p>
            <p>24/7 Support Center</p>
          </div>
        </li>
      </ul>
      <div className="">
        <div className="flex items-center gap-x-2">
          <p className="font-bold">Follow us:</p>
          <ul className="flex items-center gap-x-2">
            {socialMediaLinks.map(socialLink => (
              <li
                key={socialLink.name}
                className="w-8 h-8 flex justify-center items-center bg-main-500 text-white rounded-full">
                <Link to={socialLink.link}>
                  <i className={`bx bxl-${socialLink.name}`}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm">Up to 15% discount on your first subscribe</p>
      </div>
    </div>
  );
}

export default CopyrightFooter;
