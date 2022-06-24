import React from "react";


import { StaticImage } from "gatsby-plugin-image";
import SliderDetailServices from "../../components/Slider/SliderDetailServices";

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



const AmenitiesSection4 = ({ headingLevel, className, 
  title1,description1,
  title2, description2,
  title3, description3,  
  }) => {


  return (
    <>
      <section className={` ${className || "mb-10 md:mb-12"}`}>
        <div className="container pt-10">
          <div class="md:flex ...">
            <div class="md:w-full pl-5 pr-5 ... ">
              <div className="grid items-center gap-y-10 md:grid-cols-1 md:gap-x-10 lg:gap-x-20">
                    <div>
                      {title1 && <h2 className="font-heading font-bold text-typography-heading text-[2.1875rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">{title1}</h2>}
                      <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                        RanchView Senior Assisted Living is nestled in an unincorporated area called Olivenhain, which is between Encinitas and Rancho Santa Fe. Our property includes:
                      </p>
                      <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-1 auto-rows-max">
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              A large, 15,000 square foot home
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Private and semi-private rooms that can be decorated by the family or a professional decorator
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Spacious outdoor patio area featuring live music every day of the week
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Lush landscaping
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Hydration stations throughout the community
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Non-smoking buildings
                              </p>
                            </div>
                      </div> 
                      
                      {/* <StyledContent>
                          {description1 && <PortableText blocks={description1} />}
                      </StyledContent> */}
                    </div>                  
                </div>
                <div className="grid items-center gap-y-10 md:grid-cols-1 pt-10 md:gap-x-10 lg:gap-x-20">
                  <div>
                      {title2 && <h3 className="font-heading font-bold text-typography-heading text-[2.1875rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">{title2}</h3>}
                      <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                      RanchView’s staff is carefully screened and hired to serve residents with integrity, compassion, and dedication to their safety and comfort. Our team includes:                      </p>
                      <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-1 auto-rows-max">
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Highly trained Memory Care Team with expert knowledge in caring for those with Alzheimer’s disease and other types of dementia
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Community physician who works at a local hospital and is on call 24/7, 365 days a year15                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Nurses and Certified Nursing Assistants (CNAs)
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Other medical and mental health professionals
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              On-site professional culinary staff that prepares gourmet meals and refreshments with fresh, organic ingredients
                              </p>
                            </div>                            
                      </div> 
                      {/* <StyledContent>
                          {description2 && <PortableText blocks={description2} />}
                      </StyledContent> */}
                  </div>                  
                </div>                
                <div className="grid items-center gap-y-10 md:grid-cols-1 pt-10 md:gap-x-10 lg:gap-x-20">
                    <div>
                      {title3 && <h3 className="font-heading font-bold text-typography-heading text-[2.1875rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">{title3}</h3>}
                      <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                      RanchView is a safe environment for both our staff and residents. Our safety and security measures include:
                      </p>
                      <div class="grid grid-flow-row grid-cols-1 sm:grid-cols-1 auto-rows-max">
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Enclosed property with gated access
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              24-hour emergency services
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              On-call physician 24/7, 365 days a year
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Safe access to all areas and grounds
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Surveillance cameras in common areas and at gates
                              </p>
                            </div>
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
                              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                              Building meets all ADA requirements including wide hallways, safety rails, shower chairs, and no lips or gaps at doorways &#40;for easy wheelchair and walker access&#41;
                              </p>
                            </div>
                      </div>
                      {/* <StyledContent>
                          {description3 && <PortableText blocks={description3} />}
                      </StyledContent> */}
                      {/* <ButtonContactSolid modal="modal-contact" altStyle={1} text="Contact" /> */}
                    </div>                  
                </div>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default AmenitiesSection4;
