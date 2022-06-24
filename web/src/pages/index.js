import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import WhyUs from "../components/Repeating/WhyUs";
import RecentPosts from "../components/Repeating/RecentPosts";
import RanchViewLifestyle from "../components/Repeating/RanchViewLifestyle";
import Services from "../components/Repeating/Services";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";



const IndexPage = ({ data }) => {
  

  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      <SearchEngineOptimization
        title="Home"
        description="RanchView | Wise Digital Partners"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <div className="relative w-full pt-[150%] md:pt-[31%] pt-10" >
      {/* <section className="relative mb-20 pt-10 pb-56 md:mb-32 md:pt-28 pt-[52.85%] bg-Black w-full"> */}
        <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
          <StaticImage
            src="../images/1.0 Homepage/1.0 hero-desktop.png"
            alt="The good life, continued"
            loading="eager"
            placeholder="none"
            className="h-full"
            imgClassName="object-top"
          />
        </div>

        <div className="absolute bottom-0 left-0 h-full w-full md:hidden">
          <StaticImage
            // src="../images/1.0 Homepage/home_hero_mobile.png"
            src="../images/1.0 Homepage/home_hero_mobile.png"
            alt="The good life, continued"
            loading="eager"
            placeholder="none"
            className="h-full w-full"
            imgClassName="object-top"
          />
        </div>

        <div className="container relative top-[-520px] md:top-[-150px] lg:top-[-240px] xl:top-[-300px]">
          <div className="text-center md:max-w-[588px] md:text-left">
            <p className="font-heading text-[3.75rem] leading-[4rem] font-bold text-white lg:mb-5 md:text-[6.875rem] md:leading-[7.2rem]">
              The good life,{" "}
              <span className="text-tertiary-200">continued.</span>

              {/* {data.allSanityServices.nodes &&
                data.allSanityServices.nodes.map(node => (
                  <li key={node.title}>
                    {node.title}
                  </li>
              ))} */}
            </p>
            <p className="font-light text-white text-[1.5rem] leading-[2.125rem] md:text-[2.125rem] md:leading-[2.75rem] md:mb-4 lg:text-[2.125rem] lg:leading-[2.75rem]">
              Memory care and assisted living in a relaxed, home-like setting.
            </p>
            <ButtonSolid modal="modal-contact" altStyle={2} text="Contact Us" />
          </div>
          {/* <div>
            <StaticImage
              // src="../images/1.0 Homepage/2.0 intro.jpg"
              src="../images/1.0 Homepage/Hero Joe.png"
              alt="Ranchview"
              loading="eager"
              placeholder="none"
            />
          </div> */}
        </div>
      {/* </section> */}
      </div>

      <section className="mb-20 md:mb-32 pt-8">
        <div className="container">
          <div className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10 lg:gap-x-20">
            <div>
              <h1 className="font-bold text-body text-typography-heading text-[2.5rem] leading-[2.875rem] md:text-[3rem] md:leading-[3.625rem] font-heading">
                Top Alzheimer’s & Dementia Care Serving Encinitas & North
                County, CA
              </h1>
              <p className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
              RanchView is a memory care facility located in Olivenhain, a small community nestled between the coastal town of Encinitas and the suburb of Rancho Santa Fe.
              </p>
            </div>
            <div>
              <StaticImage
                src="../images/1.0 Homepage/2.0 intro.jpg"
                alt="Top Alzheimer’s & Dementia Care Serving Encinitas & North County, CA"
                width={560}
                loading="eager"
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <RanchViewLifestyle hide={4} />
      <WhyUs />
      <Testimonials />
      <RecentPosts />
      <CallToAction phonenumber={data.contactInfo.phonenumber} />
    </Layout>
  );
};

export const data = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Facebook.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Twitter.jpg" }
    ) {
      publicURL
    }
    sanitySiteSettings {
        title
    }

    allSanityServices {
      nodes {
        title
        _id
      }
      totalCount
    }
    contactInfo : sanityContactinfo {
      title
      description
      phonenumber
      email
      address
      license
      bookingurl
      titleofquestionnaire
      questions
    }
    siteSettings : sanitySiteSettings {
      title
      description
      author
      headerlogo {
        asset {
          gatsbyImageData
        }
      }
      footerlogo {
        asset {
          gatsbyImageData
        }
      }
      facebookurl
      twitterurl
      privacypolicy
    }
  }
`;

export default IndexPage;
