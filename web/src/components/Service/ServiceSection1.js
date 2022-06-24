import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


const ServiceSection1 = ({ headingLevel, className, sectionTitle, sectionDesc, contents, defaultImageUrl}) => {

  return (
    <>
      <section className={`${className || "mb-20 md:mb-32 bg-[#F0F6F7]"}`}>
        <div className="md:container">
        
          <div className="grid items-center md:grid-cols-2 md:gap-x-10 -z-10 lg:gap-x-20">
          <div className="block md:hidden">
            {contents.bgimage && contents.bgimage.asset ? (
                  <div className="overflow-hidden">
                  <GatsbyImage
                      image={contents.bgimage.asset.gatsbyImageData}
                      loading="lazy"
                      width={560}
                      // className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                  />
                  </div>
              ): (                  
                <>
                </>                   
              )
            }
          </div>
            <div className="container px-5 md:px-20 py-10">              
              <h1 className="mb-0 font-heading font-bold text-typography-heading text-[2.5rem] leading-[2.875rem] md:text-[3rem] md:leading-[3.625rem]">
                {sectionTitle}
              </h1>
              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem] pt-5">
                {sectionDesc}
              </p>
              <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" />
            </div>
            <div className="hidden md:block">
              {/* <StaticImage
                src="../../images/2.0 Service Pages/assisted-living-hero.jpg"
                alt="Top Alzheimer’s & Dementia Care Serving Encinitas & North County, CA"
                width={560}
                loading="eager"
                placeholder="none"
              /> */}
                {contents.bgimage && contents.bgimage.asset ? (
                    <div className="overflow-hidden">
                    <GatsbyImage
                        image={contents.bgimage.asset.gatsbyImageData}
                        loading="lazy"
                        width={560}
                        // className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                    />
                    </div>
                ): (                  
                  <>
                  </>                   
                )
                }
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection1;
