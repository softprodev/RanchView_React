import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import FaqsList from "../components/Faqs/FaqsList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";
import FaqSection from "../components/Faqs/FaqSection";

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
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <FaqSection  
        //  sectionTitle={data.allSanityFaqs.totalCount}
         sectionTitle="FAQs"
         sectionDesc="The decision to transition to assisted living is a big one and you’ll have questions. Here are some that we’re frequently asked by new families.
         "
      />
      
      <section className="pb-20 md:pb-24">
        <div className="container">
          
          <div className="grid gap-y-12 md:grid-cols-1 md:gap-x-8">
              <FaqsList nodes={data.allSanityFaqs.nodes} />
          </div>
        </div>
      </section>
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
    allSanityFaqs {
      totalCount  
      nodes {
        question
        _rawAnswer
        id
        answer {
          children {
            text
          }
        }
      }         
      edges {
        node {
          question
          _rawAnswer
          id
        }
      }
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
