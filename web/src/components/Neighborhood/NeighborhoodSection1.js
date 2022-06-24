import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonSolid from "../../components/Button/ButtonSolid";
import ButtonContactSolid from "../../components/Button/ButtonContactSolid";



const NeighborhoodSection1 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      {/* <section className="relative pt-10 md:mb-25 md:pt-28 md:max-h-[30rem]"> */}
      <section className="relative pt-[5rem] md:mb-25  md:pt-[4.5rem] pb-0 md:pb-26 md:max-h-[30rem] bg-[#F0F6F7]">
      {/* <section className="relative pt-[7rem] md:mb-25  md:pt-[4.5rem] pb-26 md:max-h-[30rem] bg-[#F0F6F7]"> */}
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
          <StaticImage
            src="../../images/3.0 Neighborhood/Neighborhood.jpg"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full"
            imgClassName="object-top"
          />
        </div>

        

        <div className="container relative flex-row md:flex-col pb-[5rem] md:pb-[0rem]">
          <div className="text-center md:max-w-[588px] md:text-left">
            <h1 className="mb-0 font-heading text-black md:text-white font-bold text-[2.5rem] leading-[2.875rem] md:text-[3rem] md:leading-[3.625rem]">
                {sectionTitle}
            </h1>
            
            <p className="font-body font-normal text-black md:text-white  text-[1.25rem] leading-[1.875rem] pt-5">
                {sectionDesc}
            </p>
            <ButtonSolid className="hidden md:block" modal="modal-contact" altStyle={2} text="Contact Us" />
            <ButtonContactSolid className="block md:hidden" modal="modal-contact" altStyle={1} text="Contact Us" />
          </div>
            {/* <div>
            <StaticImage
              // src="../images/1.0 Homepage/2.0 intro.jpg"
              src="../images/1.0 Homepage/Hero Joe.png"
              alt="Ranchview"
              loading="eager"
              placeholder="none"
            />
          </div> */}
        </div>

        <div className="relative bottom-0 left-0 h-full w-full md:hidden">
          <StaticImage
            src="../../images/3.0 Neighborhood/1.0 Neighborhood-mobile.jpg"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full w-full"
            imgClassName="object-top"
          />
        </div>
      </section>
    </>
  );
};

export default NeighborhoodSection1;
