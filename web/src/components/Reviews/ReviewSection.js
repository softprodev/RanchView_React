import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const ReviewSection = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <div className="relative w-full pt-[30%] md:pt-[20%] lg:pt-[16%] pt-10" >

      {/* <section className="relative mb-20 pt-10 pb-56 md:mb-32 md:pt-28"> */}
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block lg:hidden">
          <StaticImage
            src="../../images/reviews/review_bg.png"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            layout="constrained"
            className="h-full"
            imgClassName="object-top"
          />
        </div>
        <div className="absolute bottom-0 left-0 hidden h-full w-full lg:block">
          <StaticImage
            src="../../images/reviews/review_bg_lg.png"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            layout="constrained"
            className="h-full"
            imgClassName="object-top"
          />
        </div>
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
          <StaticImage
            src="../../images/reviews/review_bg_lg.png"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            layout="constrained"
            className="h-full"
            imgClassName="object-top"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-full w-full md:hidden">
          <StaticImage
            src="../../images/reviews/review_bg.png"
            alt="The Ranch View Lifestyle"
            loading="eager"
            placeholder="none"
            className="h-full w-full"
            imgClassName="object-top"
          />
        </div>
        
        <div className="container relative top-[-90px] md:top-[-150px] lg:top-[-180px] xl:top-[-200px]">
            <header className="mx-auto mb-14 text-center md:mb-20 md:max-w-[720px]">
              <h1 className="font-heading text-white font-bold text-[2.5rem] leading-[2.875rem] md:text-[3rem] md:leading-[3.625rem]">
              {sectionTitle}
              </h1>
              <p className="font-body font-normal text-white text-[1rem] leading-[1.5rem]">
                  {sectionDesc}
              </p>
              <ButtonContactSolid className="font-body font-semibold text-white text-[1rem] leading-[1.5rem]" modal="modal-contact" altStyle={1} text="Leave a Review" />
            </header>
        </div>
      {/* </section> */}
      </div>
    </>
  );
};

export default ReviewSection;
