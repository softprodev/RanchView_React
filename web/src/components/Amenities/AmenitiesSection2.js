import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonSolid from "../../components/Button/ButtonSolid";

import heroImage from "../../images/5.0 Amenities/1.0 Amenities-Hero.jpg";


const AmenitiesSection2 = ({ headingLevel, className, sectionTitle, sectionDesc, sectionContentArray}) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <>
      <section className="mb-20 md:mb-32">
        <div className="container">
            <h1>
              {sectionTitle}
            </h1>
          <div className="grid items-center gap-y-4 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
            <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 auto-rows-max">
              {sectionContentArray &&
                sectionContentArray.map(content => (
                  <div class="flex ">
                    <StaticImage class="mt-1 mr-1 flex-none"
                      src="../../images/5.0 Amenities/check.svg"
                      alt="check"
                      layout="fixed"
                      width={15}
                      height={15}
                      loading="eager"
                      placeholder="none"
                    />
                    <p class="flex-initial">
                      {content}
                    </p>
                  </div>
              ))}              
            </div>                        
          </div>
        </div>
      </section>
    </>
  );
};

export default AmenitiesSection2;
