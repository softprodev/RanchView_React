import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PortableText from "../components/Blog/portableText";
import styled from "@emotion/styled";
import tw from "twin.macro";

import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";


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

      <section className="pt-10 pb-20 md:pt-16 md:pb-24">
        <div className="container">
          <header className="mb-12 md:mb-18">
            <h1 className="mb-0">{data.sanityCareer.title}</h1>
          </header>
          <p className="mb-0">{data.sanityCareer.description}</p>

          <header className="my-12 md:my-18">
            <h2 className="mb-0">{data.sanityCareer.position}</h2>
          </header>
          {/* <p className="mb-0">{data.sanityCareer.detail}</p> */}
          <StyledContent>
              {data.sanityCareer._rawDetail && <PortableText blocks={data.sanityCareer._rawDetail} />}
          </StyledContent>
          {/* <div className="grid gap-y-12 md:grid-cols-3 md:gap-x-8">
            {postNodes && postNodes.length > 0 && (
              <BlogPostList nodes={postNodes} />
            )}
          </div> */}
        </div>
      </section>

      <CallToAction phonenumber={data.contactInfo.phonenumber} />
    </Layout>
  );
};

export const query = graphql`
  {
    sanityCareer {
      title
      description
      position
      _rawDetail
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
