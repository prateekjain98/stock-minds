import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

// const pricingData = [
//   "Seamless integration",
//   "Real-time data visualization",
//   "Advanced predictive analytics",
//   "Collaborative environment",
//   "Responsive customer support",
// ];

const pricingData = [
  {
    title: "Consultant",
    price: "$100",
    unit: "/ hour",
    description: "Setup Automation & Tools",
    buttonText: "Book meeting",
    buttonLink: "Calendly",
    points: [
      "Seamless integration",
      "Real-time data visualization",
      "Advanced predictive analytics",
      "Collaborative environment",
      "Responsive customer support",
    ],
  },
  {
    title: "Project",
    price: "$1k+",
    unit: "/ project",
    description: "Anything from landing page to dashboards",
    buttonText: "Book meeting",
    buttonLink: "Calendly",
    points: [
      "Seamless integration",
      "Real-time data visualization",
      "Advanced predictive analytics",
      "Collaborative environment",
      "Responsive customer support",
    ],
  },
  {
    title: "Full Time",
    price: "Negotiable",
    unit: "",
    description: "Take me off the market",
    buttonText: "Book meeting",
    buttonLink: "Calendly",
    points: [
      "Seamless integration",
      "Real-time data visualization",
      "Advanced predictive analytics",
      "Collaborative environment",
      "Responsive customer support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1150px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-2">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Find Your Perfect Fit
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Hire Me
              </h2>
              <p className="mb-6 text-customGrayText">
                Select the plan that suits your needs.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              {pricingData.map((data) => (
                <div
                  key={data.title}
                  className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0"
                >
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                      {data.title}
                    </h4>
                    <div className="flex justify-start items-end">
                      <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                        {data.price}
                      </div>
                      <div className="text-gray-500">{data.unit}</div>
                    </div>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left text-sm">
                      {data.description}
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {data.points.map((point, index) => (
                        <li className="mb-4 flex" key={`${point}-${index}`}>
                          <CheckArrowIcon />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                      //onClick={() => setIsModalOpen(true)}
                    >
                      {data.buttonText}
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Discuss Technology
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $0
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    //onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Consultant
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      $150
                    </div>
                    <div className="text-gray-500">/ hour</div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Unlock more features and elevate your data analysis.
                  </p>
                  <ul className="mb-14 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Premium
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experience the full power of our analytic platform
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    //onClick={() => setIsModalOpen(true)}
                  >
                    Get Started
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
