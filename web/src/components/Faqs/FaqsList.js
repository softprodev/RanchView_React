// import BlogPostPreview from "./BlogPostPreview";
// import FaqPreview from "./FaqPreview";
// import Link from 'gatsby-plugin-transition-link';

import Banner from "./Banner";

import React from "react";

import PortableText from "../../components/Blog/portableText";
import tw from "twin.macro";
import styled from "@emotion/styled";

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

function FaqsList(props) {
  return (
    <>
     
    <Banner>
      {/* <Banner.Header>Frequently Asked Questions</Banner.Header> */}

      {props.nodes &&
        props.nodes.map((node,index) => (
          <Banner.Entity key={index}>
            {/* <Banner.Question>question</Banner.Question> */}
              <Banner.Question >{node.question}</Banner.Question>
              {/* <StyledContent>
                              {node._rawAnswer && <PortableText blocks={node._rawAnswer} />}
              </StyledContent> */}
              <Banner.StyledContent blocks={node._rawAnswer}>{node._rawAnswer}</Banner.StyledContent>
              {/* <Banner.Text blocks={node._rawAnswer}>test</Banner.Text> */}
            {/* <Banner.Text>{node.answer}</Banner.Text> */}
          </Banner.Entity>
        ))}
    </Banner>

      
      {/* {faqlist.nodes &&
        faqlist.nodes.map((faq) => (
          <div key={faq.id}>
            test list - {faq.question}
          </div>
        ))} */}


      {/* {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>
            Browse more
          </Link>
        </div>
      )} */}
    </>
  );
}

FaqsList.defaultProps = {
  title: "",
  nodes: [],
  // faqlist: [],
  browseMoreHref: "",
};

export default FaqsList;
