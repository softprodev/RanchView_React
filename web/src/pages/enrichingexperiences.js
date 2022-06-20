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

const EnrichingExperiencesPage = (props) => {
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
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <ServiceSection1 sectionTitle={data.sanityEnrichingexperiences.title}
         sectionDesc={data.sanityEnrichingexperiences.description}
         contents={data.sanityEnrichingexperiences}
         defaultImageUrl="../../images/2.0 Service Pages/enriching-experiences-hero.jpg"
        />
      <ServiceSection2 title1={data.sanityEnrichingexperiences.title1} description1={data.sanityEnrichingexperiences._rawDescription1}
          title2={data.sanityEnrichingexperiences.title2} description2={data.sanityEnrichingexperiences._rawDescription2}
          title3={data.sanityEnrichingexperiences.title3} description3={data.sanityEnrichingexperiences._rawDescription3}
          sectionNumber={5}
        />

      <ContactDiv phonenumber={data.contactInfo.phonenumber}/>
      <RanchViewLifestyle hide={4} />
      <WhyUs />
      <Testimonials />
      <RecentPosts />
      <CallToAction phonenumber={data.contactInfo.phonenumber} />
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


    sanityEnrichingexperiences {
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
      title1
      _rawDescription1
      title2
      _rawDescription2
      title3
      _rawDescription3
    }
  }
`;


export default EnrichingExperiencesPage;
