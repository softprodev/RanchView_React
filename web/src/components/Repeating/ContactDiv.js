import React from "react";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";

const ContactDiv = ({
  heading,
  headingLevel,
  className,
  phonenumber
}) => {
  const HeadingTag = headingLevel || "h2";

  return (
    <div className="container">
      <div className="-w-[704px] text-center mb-2 py-3 md:mb-2">
          <div className="items-right justify-start space-y-4 md:flex md:space-y-0 md:space-x-4">
            <ButtonGhost href="tel:760-753-5082" text={phonenumber} />
            <ButtonSolid modal="modal-contact" text="Contact" />
          </div>
      </div>
    </div>
  );
};

export default ContactDiv;
