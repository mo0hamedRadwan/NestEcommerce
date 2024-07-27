import { Link } from "@mongez/react-router";
import appStoreImg from "assets/images/app-store.jpg";
import googlePlayImg from "assets/images/google-play.jpg";
import logo from "assets/images/logo.svg";
import paymentMethodImg from "assets/images/payment-method.png";
import { footerColumnsLinks, websiteContact } from "./FooterData";

export default function MiddleFooter() {
  return (
    <div className="flex justify-between items-start flex-wrap lg:flex-nowrap gap-5 py-10">
      <div className="max-w-72 flex flex-col">
        <img src={logo} alt="website logo" className="w-52 h-16" />
        <p className="mt-3">Awesome grocery store website template</p>
        <ul className="mt-8 flex flex-col gap-y-2">
          {websiteContact.map(contact => (
            <li key={contact.icon} className="flex gap-x-2">
              <span className="text-xl text-main-500">
                <i className={`bx bx-${contact.icon}`}></i>
              </span>
              <span>{contact.data}</span>
            </li>
          ))}
        </ul>
      </div>

      {footerColumnsLinks.map(columnLinks => (
        <div key={columnLinks.name} className="min-w-40 flex flex-col gap-y-5">
          <h2 className="text-2xl font-bold">{columnLinks.name}</h2>
          <ul className="flex flex-col gap-y-2">
            {columnLinks.links.map(link => (
              <li key={link.label} className="hover:underline">
                <Link to={link.link}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex flex-col gap-y-5">
        <h2 className="text-2xl font-bold">Install App</h2>
        <div className="flex flex-col">
          <p className="">From App Store or Google Play</p>
          <div className="flex items-center gap-x-4 mt-5">
            <img src={appStoreImg} alt="App Store" className="w-24 h-10" />
            <img src={googlePlayImg} alt="Google Play" className="w-24 h-10" />
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <p className="mb-5">Secured Payment Gateways</p>
          <img src={paymentMethodImg} alt="" />
        </div>
      </div>
    </div>
  );
}
