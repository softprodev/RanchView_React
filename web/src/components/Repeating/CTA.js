import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const CTA = ({
  heading,
  headingLevel,
  className,
  phonenumber,
  description
}) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <div className="container">
      <section
        className={` ${
          className || "mb-20 rounded-2xl bg-tertiary-50 py-18 md:mb-32"
        }`}
      >
        <div className="mx-auto max-w-[350px] md:max-w-[704px] text-center px-5">
          <HeadingTag className="font-heading text-typography-heading font-bold text-[2.1875rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">
            {heading || ["Get More Info or Plan a Visit"]}
          </HeadingTag>
          
          {description ? (
            <p className="font-body text-typography-body font-normal text-[1.125rem] leading-[1.875rem] md:text-[2.5rem] md:leading-[3rem]">
              {description}
            </p>
          ): (
            <p className="md:text-xl">
            We’re here to answer your questions and would love to show you
            around if you’re interested in scheduling a tour.
          </p>
          )}
          
          {/* <p className="md:text-xl">
            We’re here to answer your questions and would love to show you
            around if you’re interested in scheduling a tour.
          </p> */}
          <div className="items-center justify-center space-y-4 flex flex-col md:flex-row md:space-y-0 md:space-x-4">
            <ButtonGhost href="tel:760-753-5082" text={phonenumber} />
            <ButtonSolid modal="modal-contact" text="Contact" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
