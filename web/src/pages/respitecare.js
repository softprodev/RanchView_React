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


const RespitePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  // const postNodes =
  //   data &&
  //   data.posts &&
  //   mapEdgesToNodes(data.posts)
  //     .filter(filterOutDocsWithoutSlugs)
  //     .filter(filterOutDocsPublishedInTheFuture);

  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      <SearchEngineOptimization
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <ServiceSection1 sectionTitle={data.sanityRespitecare.title}
         sectionDesc={data.sanityRespitecare.description}
         contents={data.sanityRespitecare}
         defaultImageUrl="../../images/2.0 Service Pages/respite-care-hero.jpg"
        />
      <ServiceSection2 title1={data.sanityRespitecare.subtitle1} description1={data.sanityRespitecare._rawSubdescription1}
          title2={data.sanityRespitecare.subtitle2} description2={data.sanityRespitecare._rawSubdescription2}
          title3={data.sanityRespitecare.subtitle3} description3={data.sanityRespitecare._rawSubdescription3}
          sectionNumber={4}
        />
      <RanchViewLifestyle hide={4} />
      <WhyUs />
      <Testimonials />
      <CallToAction phonenumber={data.contactInfo.phonenumber}  description={data.sanityRespitecare.ctacontent} />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityRespitecare {
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
      subtitle2
      _rawSubdescription2
      subtitle3
      _rawSubdescription3
      subctacontent
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


export default RespitePage;
