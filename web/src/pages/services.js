import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostList from "../components/Blog/BlogPostList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";


import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";
// import { differenceInDays, formatDistance, format } from "date-fns";

import { getServiceUrl } from "../lib/helpers";

import {
  // filterOutDocsPublishedInTheFuture,
  // filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

const ServicesPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout siteSettings={data.siteSettings} contactInfo={data.contactInfo}>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes =
    data &&
    data.posts &&
    mapEdgesToNodes(data.posts);
      // .filter(filterOutDocsWithoutSlugs)
      // .filter(filterOutDocsPublishedInTheFuture);

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
            <h1 className="mb-0 font-heading font-bold text-5xl">Care Services in Greater San Diego</h1>
            <h6 className="mb-0 font-body text-base leading-6 text-[#666666] pt-5">We provide care that helps our residents embrace life every day, age gracefully, and thrive. Ask us about our all-inclusive rates.</h6>
          </header>
          <div className="grid gap-y-12 md:grid-cols-3 md:gap-x-8">
            {data.allSanityServices.nodes &&
              data.allSanityServices.nodes.map((node) => (
                <div key={node.id}>
                  <Link
                      to={getServiceUrl(node.slug.current)}
                      className="group block font-normal text-typography-body no-underline hover:text-typography-body"
                    >
                      {node.backgroundimage && node.backgroundimage.asset ? (
                        <div className="mb-5 overflow-hidden rounded-xl">
                          <GatsbyImage
                            image={node.backgroundimage.asset.gatsbyImageData}
                            loading="lazy"
                            className="w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                          />
                        </div>
                      ): (
                        <div className="mb-5 overflow-hidden rounded-xl">
                          <p>This is a blank image</p>
                          {/* <GatsbyImage
                            src="../../images/5.0 Amenities/1.0 Amenities-mobile.jpg"
                            alt="The Ranch View Lifestyle"
                            loading="eager"
                            placeholder="none"
                            // className="h-full w-full"
                            imgClassName="object-top"
                            className="object-top w-full scale-100 transform blur-none filter transition-all duration-500 ease-linear md:group-hover:scale-105"
                          /> */}
                        </div>

                      )
                      }
                      <div className="font-heading font-bold text-base text-primary-900 pt-2">{node.title}</div>
                      <div className="font-heading font-normal text-sm text-[#666666]  pt-4">{node.description}</div>

                      <a className="font-heading font-bold text-base text-[#117263]" href={getServiceUrl(node.slug.current)}> Learn More</a>
                    </Link>
                </div>
            ))}

          </div>
        </div>
      </section>

      <CallToAction phonenumber={data.contactInfo.phonenumber} />
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityServices (sort: {fields: title}) {
      totalCount
      nodes {
        title
        slug {
          _key
          _type
          current
        }
        description
        backgroundimage {
          asset {
            gatsbyImageData
          }
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

export default ServicesPage;
