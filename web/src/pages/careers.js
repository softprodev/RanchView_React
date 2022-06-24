import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PortableText from "../components/Blog/portableText";

import SearchEngineOptimization from "../components/SEO";
import GraphQLErrorList from "../components/Blog/graphql-error-list";

import CallToAction from "../components/Repeating/CTA";

import tw from "twin.macro";
import styled from "@emotion/styled";
import CareerSection1 from "../components/Career/CareerSection1";
import ButtonSolid from "../components/Button/ButtonSolid";

const StyledContent = styled.div`
  p{
    //styleName: Body Medium/Medium-Regular;
    font-family: Catamaran;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

  },
  span,
  li {
    // ${tw`md:text-xl`}
    font-family: Catamaran;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  ul {
    ${tw`list-disc pl-7 mb-6 flex flex-col space-y-0.5`}
    font-family: Catamaran;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
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

  // const jobNodes =
  //   data &&
  //   data.allSanityJobs &&
  //   mapEdgesToNodes(data.allSanityJobs);

  return (
    <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
      <SearchEngineOptimization
        title="Career"
        description="RanchView | Wise Digital Partners"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <CareerSection1  sectionTitle={data.sanityCareer.title}
         sectionDesc={data.sanityCareer.description}
      />

      <section className="pt-5 pb-10 md:pt-8 md:pb-24">
        <div className="container">
          {/* <header className="mb-12 md:mb-18">
            <h1 className="mb-0">{data.sanityCareer.title}</h1>
          </header>
          <p className="mb-0 text-lg">{data.sanityCareer.description}</p>

          <header className="my-12 md:my-18">
            <h2 className="mb-0">{data.sanityCareer.position}</h2>
          </header> */}
          {/* <p className="mb-0">{data.sanityCareer.detail}</p> */}
          <StyledContent>
              {data.sanityCareer._rawDetail && <PortableText blocks={data.sanityCareer._rawDetail} />}
          </StyledContent>
          {/* <div className="grid gap-y-12 md:grid-cols-1 md:gap-x-8"> */}
            {/* {jobNodes && jobNodes.length > 0 && ( */}
              {data.allSanityJobs.nodes &&
                data.allSanityJobs.nodes.map((node) => (
                  <div className="py-3" key={node._id}>
                    <h3 className="font-heading font-bold text-typography-heading text-[1.875rem] leading-[2.25rem]">{node.title}</h3>
                    <StyledContent className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
                        {node._rawDescription && <PortableText blocks={node._rawDescription} />}
                    </StyledContent>
                    <ButtonSolid modal="modal-contact" text="Contact" />
                  </div>
                ))}
            {/* )} */}
          {/* </div> */}
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
    }
    allSanityJobs {
      totalCount
      nodes {
        title
        _rawDescription
        _id
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
