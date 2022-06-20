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
              <h1 className="font-heading font-bold">
                {sectionTitle}
              </h1>
              <p className="font-body text-xl mb-0 font-normal">
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
