import React, { useState } from "react";
// import { Container, Header, Entity, Inner, Question, Text } from "./styles ";

import styled from "styled-components/macro";
import Link from "gatsby-plugin-transition-link";


import PortableText from "../../components/Blog/portableText";
import tw from "twin.macro";
import styled1 from "@emotion/styled";

export const StyledContent = styled1.div`
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
    //styleName: Body Medium/Medium-Regular;
font-family: Catamaran;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

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
export const NavItem = styled1.div`
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



export const MainContainer = styled.div`
//   border-bottom: 9px solid #070707;
  display: flex;
  width : 100%;
`;
export const Entity = styled.div`
//   color: #070707;
  background : transparent;
  border-bottom: 1px solid #070707;
//   max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    // margin-top: 1.5em;
    border-top: 1px solid #070707;
  }
`;

export const EntityNav = styled.div`
//   color: #070707;
  background : transparent;
  // border-bottom: 1px solid #070707;
//   max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    // margin-top: 1.5em;
    // border-top: 1px solid #070707;
  }
`;
export const Inner = styled.div`
  padding: 0px 40px;
//   max-width: 800px;
//   margin: auto;
  flex-direction: column;
  display: flex;
  width : 100%;
`;
export const NavMenu = styled.div`

  color: white;
  justify-content: center;
  font-size: 34px;
  line-height: 34px;
  //styleName: Desktop Headings/H4;
  font-family: Cormorant;
  font-weight: 700;
  // line-height: 34px;
  // letter-spacing: 0em;
  // text-align: center;

  // justify-content: space-between;
  cursor: pointer;
  // margin-bottom: 2px;
  display: flex;
  // font-weight: normal;
  color: white;
//   background: #1a1919;
  // padding: 1.75em 0.12em;
  // align-items: center;
`;
export const Question = styled.div`
  //styleName: Desktop Headings/H4;
  font-family: Cormorant;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  // letter-spacing: 0em;
  // text-align: left;
  

  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  // font-weight: normal;
  color: black;
//   background: #1a1919;
  padding: 1.75em 0.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 26px;
  font-weight: 500;
  line-height: normal;
//   background: #303030;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 3;
  margin-top: 0 !important;
  font-size: 45px;
//   margin-bottom: 0px !important;
//   text-align: center;
    // border-bottom: 1px solid #070707;


  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;

const QuestionContext = React.createContext();
export default function Banner({ children, ...restProps }) {
  return (
    <MainContainer {...restProps}>
      <Inner>{children}</Inner>
    </MainContainer>
  );
}
Banner.Header = function BannerHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Banner.Entity = function BannerEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Banner.EntityNav = function BannerEntityNav({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <EntityNav {...restProps}> {children}</EntityNav>
    </QuestionContext.Provider>
  );
};
Banner.Question = function BannerHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question className="font-heading font-bold text-typography-heading text-[1.125rem] md:text-[1.5rem] leading-[1.5rem] md:leading-[2.125rem]" onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-plus"></i>}
    </Question>
  );
};
Banner.StyledContent = function BannerStyledContent({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);

  return ( open ?
    <StyledContent className="font-body font-normal text-typography-body text-[1rem] leading-[1.5rem]">
    {children && <PortableText blocks={children} />}
    </StyledContent>
    : null
  );
};
// Banner.Text = function BannerText({ blocks  }) {
Banner.Text = function BannerText({ children,blocks, ...restProps  }) {
  const { open } = React.useContext(QuestionContext);
  return open ? 
    <StyledContent >
      {/* {children}{blocks} */}
      aad {children}
      {/* <div>tests</div> */}
      {/* <PortableText blocks={{blocks}} /> */}
      {/* test */}
      {/* {{blocks} && <PortableText blocks={{blocks}} />} */}
    </StyledContent>
    // <Text {...restProps}>
    //   {children}a{children}
    // </Text>
  : null;
};


Banner.NavMenu = function BannerHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <NavMenu className="font-heading text-white font-bold pb-2" onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
    </NavMenu>
  );
};


Banner.NavItem = function BannerText({ children,name,href, ...restProps  }) {
  const { open } = React.useContext(QuestionContext);
  return open ? 
    <NavItem className="py-2 text-white" >
      <Link
        to={href}
        className="text-xl text-white py-2 font-body font-normal leading-7 no-underline hover:text-white"
      >
        {name}
      </Link>
    </NavItem>
  : null;
};