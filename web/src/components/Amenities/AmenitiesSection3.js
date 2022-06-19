import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ButtonSolid from "../../components/Button/ButtonSolid";

import heroImage from "../../images/5.0 Amenities/1.0 Amenities-Hero.jpg";


const AmenitiesSection3 = ({ headingLevel, className, sectionTitle, sectionDesc }) => {
  const HeadingTag = headingLevel || "h2";

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
              <h1>
                {sectionTitle}
              </h1>
              <p>
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
