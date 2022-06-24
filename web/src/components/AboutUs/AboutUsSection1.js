import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonSolid from "../../components/Button/ButtonSolid";
import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const AboutUsSection1 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <section className="relative pt-10 pb-0 md:pb-56 md:pt-28 md:max-h-[30rem] bg-[#F0F6F7]">
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
          <StaticImage
            src="../../images/4.0 About/1.0 About-hero.jpg"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full"
            imgClassName="object-top"
          />
        </div>

        <div className="container relative pb-[4.5rem] md:pb-[0rem]">
          <div className="text-center md:max-w-[588px] md:text-left">
            <p className="font-heading text-black text-mobile-6xl font-bold md:text-white lg:mb-5 md:text-6xl">
              {sectionTitle}
            </p>
            <p className="font-body text-black md:text-white md:mb-4 lg:text-[1.325rem] lg:leading-[1.85rem] md:text-xl">
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
            src="../../images/4.0 About/1.0 About-mobile.jpg"
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

export default AboutUsSection1;
