import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";


import CallToAction from "../components/Repeating/CTA";
import RanchViewLifestyle from "../components/Repeating/RanchViewLifestyle";

import AmenitiesSection1 from "../components/Amenities/AmenitiesSection1";
import AmenitiesSection2 from "../components/Amenities/AmenitiesSection2";
import AmenitiesSection3 from "../components/Amenities/AmenitiesSection3";
import AmenitiesSection4 from "../components/Amenities/AmenitiesSection4";


const Page = (props) => {
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
        title="Amenities"
        description="RanchView | Wise Digital Partners"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <AmenitiesSection1 sectionTitle={data.sanityAmenities.title}
         sectionDesc={data.sanityAmenities.description}
         />
      <AmenitiesSection4 title1={data.sanityAmenities.subtitle1} description1={data.sanityAmenities._rawDescription1}
          title2={data.sanityAmenities.subtitle2} description2={data.sanityAmenities._rawDescription2}
          title3={data.sanityAmenities.subtitle3} description3={data.sanityAmenities._rawDescription3}
          
        />
      {/* <AmenitiesSection2 sectionTitle={data.sanityAmenities.secondsectiontitle}
         sectionDesc={data.sanityAmenities.secondsectioncontent}
         sectionContentArray={data.sanityAmenities.secondsectioncontentarray}
         /> */}
      <AmenitiesSection3 sectionTitle={data.sanityAmenities.thirdsectiontitle}
         sectionDesc={data.sanityAmenities.thirdsectioncontent} 
         />
      <RanchViewLifestyle hide={4} />
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


    sanityAmenities {
      title
      description
      thirdsectiontitle
      thirdsectioncontent
      secondsectiontitle
      secondsectioncontent
      secondsectioncontentarray
      subtitle1
      subtitle2
      subtitle3
      _rawDescription1
      _rawDescription2
      _rawDescription3
      backgroundimage {
        asset {
          gatsbyImageData
        }
      }
    }
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
    posts: allSanityBlogs(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          categories {
            _id
            title
          }
          title
          slug {
            current
          }
          _rawBody(resolveReferences: { maxDepth: 5 })
        }
      }
    }
  }
`;

export default Page;
