import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";
import ServiceSection1 from "../components/Service/ServiceSection1";
import ServiceSection2 from "../components/Service/ServiceSection2";
import Testimonials from "../components/Repeating/Testimonials";
import WhyUs from "../components/Repeating/WhyUs";
import RanchViewLifestyle from "../components/Repeating/RanchViewLifestyle";
import RecentPosts from "../components/Repeating/RecentPosts";
import ContactDiv from "../components/Repeating/ContactDiv";

const HospicePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  

  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      <SearchEngineOptimization
        title="Hospice Care"
        description="RanchView | Wise Digital Partners"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <ServiceSection1 sectionTitle={data.sanityHospicecare.title}
         sectionDesc={data.sanityHospicecare.description}
         contents={data.sanityHospicecare}
         defaultImageUrl="../../images/2.0 Service Pages/hospice-care-hero.jpg"
        />
      <ServiceSection2 title1={data.sanityHospicecare.subtitle1} description1={data.sanityHospicecare._rawSubdescription1}
          title2={data.sanityHospicecare.title2} description2={data.sanityHospicecare._rawSubdescription2}
          title3={data.sanityHospicecare.subtitle3} description3={data.sanityHospicecare._rawSubdescription3}
          sectionNumber={3}
        />
      <ContactDiv phonenumber={data.contactInfo.phonenumber}/>
      <RanchViewLifestyle hide={4} />
      <WhyUs />
      <Testimonials />
      <RecentPosts />
      <CallToAction phonenumber={data.contactInfo.phonenumber} description={data.sanityHospicecare.ctacontent} />
    </Layout>
  );
};

export const query = graphql`
  {

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


    sanityHospicecare {
      title
      description
      bgimage {
        asset {
          gatsbyImageData
        }
      }
      mobilebgimage {
        asset {
          gatsbyImageData
        }
      }
      subtitle1
      _rawSubdescription1
      title2
      _rawSubdescription2
      subtitle3
      _rawSubdescription3
      subctacontent
    }
  }
`;


export default HospicePage;
