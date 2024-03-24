import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { StockMindsLogo } from "../assets/logos/StockMindsLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap lg:justify-between justify-center pb-2">
            <div>
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <StockMindsLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Stock Minds
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Modular AI powered stock news chatbots
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-400">
                Built by
                <a
                  href="https://prateekjain.io"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                  Prateek Jain
                </a>
              </p>
              <div className="w-36 mt-5 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-4">
            &copy; 2024. MIT license.
          </p>
        </div>
      </div>
    </footer>
  );
};
