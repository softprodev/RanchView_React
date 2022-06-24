import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";
import NeighborhoodSection1 from "../components/Neighborhood/NeighborhoodSection1";
import RanchViewLifestyle from "../components/Repeating/RanchViewLifestyle";
import NeighborhoodSection2 from "../components/Neighborhood/NeighborhoodSection2";

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
        title="Neighborhood"
        description="RanchView | Wise Digital Partners"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <NeighborhoodSection1 sectionTitle={data.sanityNeighborhood.title}
         sectionDesc={data.sanityNeighborhood.description}
         />
      <NeighborhoodSection2 title1={data.sanityNeighborhood.subtitle1} description1={data.sanityNeighborhood._rawSubdescription1}
        title2={data.sanityNeighborhood.subtitle2} description2={data.sanityNeighborhood._rawSubdescription2}
        title3={data.sanityNeighborhood.subtitle3} description3={data.sanityNeighborhood._rawSubdescription3}
        title4={data.sanityNeighborhood.subtitle4} description4={data.sanityNeighborhood._rawSubdescription4}
        title5={data.sanityNeighborhood.subtitle5} description5={data.sanityNeighborhood._rawSubdescription5}        
          
        />

      <RanchViewLifestyle hide={4} />
      <CallToAction phonenumber={data.contactInfo.phonenumber} />
    </Layout>
  );
};

export const query = graphql`
  {

    sanityNeighborhood {
      title
      description
      subtitle1
      subtitle2
      subtitle3
      subtitle4
      subtitle5
      _rawSubdescription1
      _rawSubdescription2
      _rawSubdescription3
      _rawSubdescription4
      _rawSubdescription5
      neighborhoodbg {
        asset {
          gatsbyImageData
        }
      }
      neighborhoodbgmobile {
        asset {
          gatsbyImageData
        }
      }
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
