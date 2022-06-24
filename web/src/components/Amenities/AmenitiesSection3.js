import React from "react";

import { StaticImage } from "gatsby-plugin-image";


const AmenitiesSection3 = ({ headingLevel, className, sectionTitle, sectionDesc }) => {

  return (
    <>
      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <StaticImage
                src="../../images/5.0 Amenities/2.0 activities.jpg"
                alt="Activities Heading"
                width={560}
                loading="eager"
                placeholder="none"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-typography-heading text-[2.1875rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">
                {sectionTitle}
              </h2>
              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                {sectionDesc}
              </p>
            </div>            
          </div>
        </div>
      </section>
    </>
  );
};

export default AmenitiesSection3;
