import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = ({ headingLevel, className, hide }) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <section className={` ${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <header className="mb-12 md:mb-16">
          <HeadingTag className="font-heading text-typography-heading font-bold text-[2.1875rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">The RanchView Lifestyle</HeadingTag>
        </header>
        <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-10">
          {hide !== 1 && (
            <Link
              to="/about"
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/Staff.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h4 className="font-heading text-typography-heading font-bold text-[1.5rem] leading-[2.125rem]">About Our Staff</h4>
                <p className="font-body text-typography-body font-normal text-[1rem] leading-[1.5rem]">
                  We’re a skilled team that is caring, compassionate, and dedicated to helping your loved one age in place gracefully and with dignity.
                </p>
              </div>
            </Link>
          )}

          {hide !== 2 && (
            <Link
              to="/amenities"
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/Amenities.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h4 className="font-heading text-typography-heading font-bold text-[1.5rem] leading-[2.125rem]">The Amenities</h4>
                <p className="font-body text-typography-body font-normal text-[1rem] leading-[1.5rem]">
                  RanchView has a variety of amenities—from on-site culinary staff to live music and a spacious patio area for relaxation and get-togethers.
                </p>
              </div>
            </Link>
          )}

          {hide !== 3 && (
            <Link
              to="/neighborhood"
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/Neighborhood.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
                <h4 className="font-heading text-typography-heading font-bold text-[1.5rem] leading-[2.125rem]">The Neighborhood</h4>
                <p className="font-body text-typography-body font-normal text-[1rem] leading-[1.5rem]">
                  We’re located north of San Diego on a sprawling property in an unincorporated area between Encinitas and Rancho Santa Fe.
                </p>
              </div>
            </Link>
          )}

          {hide !== 4 && (
            <Link
              to=""
              className="group block font-normal text-typography-body no-underline hover:text-typography-body"
            >
              <div className="overflow-hidden rounded-3xl">
                <StaticImage
                  src="../../images/0.0 Repeated Modules/RanchView Lifestyle/FAQs.jpg"
                  loading="lazy"
                  width={746}
                  className="w-full"
                />
              </div>
              <div className="pt-6">
              <h4 className="font-heading text-typography-heading font-bold text-[1.5rem] leading-[2.125rem]">FAQs</h4>
                <p className="font-body text-typography-body font-normal text-[1rem] leading-[1.5rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
