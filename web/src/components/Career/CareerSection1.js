import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";
// import styled from "styled-components/macro";


// export const ContainerDiv = styled.div`
//   top: -80%;
//   // top: -6rem;
// `;

const CareerSection1 = ({ headingLevel, className, sectionTitle, sectionDesc}) => {

  return (
    <>
      <div className="relative w-full pt-[20%] lg:pt-[16%] pt-10" >

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
              <h1 className="font-heading text-5xl font-bold text-white lg:mb-5">
                  {sectionTitle}
              </h1>
              <p className="font-body text-base text-white md:mb-4 lg:leading-[1.85rem]">
                  {sectionDesc}
              </p>
              <ButtonContactSolid modal="modal-contact" altStyle={1} text="Apply Now" />
            </header>
        </div>
      </div>
    </>
  );
};

export default CareerSection1;
