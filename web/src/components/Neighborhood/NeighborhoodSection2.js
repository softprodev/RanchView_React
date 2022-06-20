import React from "react";

import ButtonContactSolid from "../../components/Button/ButtonContactSolid";


import PortableText from "../../components/Blog/portableText";
import tw from "twin.macro";
import styled from "@emotion/styled";

const StyledContent = styled.div`
  p,
  span,
  li {
    ${tw`md:text-xl`}
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  ol {
    ${tw`list-decimal pl-7 mb-6 flex flex-col space-y-0.5`}
  }
  strong {
    ${tw`font-bold`}
  }
  em {
    ${tw`italic`}
  }
`;

const NeighborhoodSection2 = ({ headingLevel, className, 
  title1,description1,
  title2, description2,
  title3, description3,  
  title4, description4,  
  title5, description5,  
  }) => {
  
  return (
    <>
      <section className={` ${className || "mb-10 md:mb-12"}`}>
        <div className="container pt-10">
          <div class="md:flex ...">
            <div class="md:w-2/3 pl-5 pr-5 ... ">
              <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      {title1 && <h2>{title1}</h2>}
                      <StyledContent>
                          {description1 && <PortableText blocks={description1} />}
                      </StyledContent>
                    </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                  <div>
                    {title2 && <h3>{title2}</h3>}
                    <StyledContent>
                        {description2 && <PortableText blocks={description2} />}
                    </StyledContent>
                  </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                  <div>
                    {title3 && <h3>{title3}</h3>}
                    <StyledContent>
                        {description3 && <PortableText blocks={description3} />}
                    </StyledContent>
                  </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      {title4 && <h3>{title4}</h3>}
                      <StyledContent>
                          {description4 && <PortableText blocks={description4} />}
                      </StyledContent>
                      <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" />
                    </div>                  
                </div>
            </div>
            <div class="md:w-1/3 ... ">
                <div className="grid items-center mx-5 my-5 rounded-3xl p-10 gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20 bg-[#F0F6F7]">
                    <div>
                      {title5 && <h3>{title5}</h3>}
                      <StyledContent>
                          {description5 && <PortableText blocks={description5} />}
                      </StyledContent>
                      <ButtonContactSolid modal="modal-contact" altStyle={1} text="Book a Visit" />
                    </div>                  
                </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default NeighborhoodSection2;
