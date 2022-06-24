import React from "react";
// import { graphql } from "gatsby";
import Link from "gatsby-plugin-transition-link";
import { StaticImage } from "gatsby-plugin-image";

import ModalContact from "../Modal/ModalContact";
import nest from "../../images/Global/Footer/Nest Logo.svg";

import { useStaticQuery, graphql } from 'gatsby'



const Footer = ({ hideFooter,contactInfo,siteSettings }) => {



  const data = useStaticQuery(graphql`
    query {
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
    }
  `)

  // const { data, errors } = props;
  const getYear = () => {
    return new Date().getFullYear();
  };


  const serviceMenuItems = [
    {
      name: "Assisted Living",
      path: "/assistedliving",
    },
    {
      name: "Alzheimer’s Care",
      path: "/alzheimerscare",
    },
    {
      name: "Dementia Care",
      path: "/dementiacare",
    },
    {
      name: "Respite Care",
      path: "/respitecare",
    },
    {
      name: "Hospice Care",
      path: "/hospicecare",
    },
    {
      name: "Enriching Experiences",
      path: "/enrichingexperiences",
    },
  ];

  const companyMenuItems = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Reviews",
      path: "/reviews",
    },
    {
      name: "Amenities",
      path: "/amenities",
    },
    {
      name: "Neighborhood",
      path: "/neighborhood",
    },
    {
      name: "FAQs",
      path: "/faqs",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Careers",
      path: "/careers",
    },
  ];

  // const contactMenuItems = [
  //   {
  //     name: "350 Cole Ranch Road Encinitas, CA 92024",
  //     path: "",
  //   },
  //   {
  //     name: "(760) 753-5082",
  //     path: "",
  //   },
  //   {
  //     name: "email@emailaddress.com",
  //     path: "",
  //   },
  //   {
  //     name: "CA License #: 374603660",
  //     path: "",
  //   },
  // ];


  return (
    <>
      <footer
        className={`bg-primary-900 pt-20 pb-10 md:pt-16 md:pb-3 ${
          hideFooter && "hidden"
        }`}
      >
        <div className="md:container">
          
          <div class="flex flex-col items-center md:items-start md:flex-row ...">
            <div class="md:w-2/5 text-left py-10 ...">
                <Link to="/">
                  <StaticImage
                    src="../../images/Global/Logo/logo-white.png"
                    alt="Ranchview Logo"
                    loading="lazy"
                    width={317}
                  />
                </Link>
            </div>  
            <div class="w-10/12 md:w-3/5 py-10 ...">
                <div class="flex flex-col md:flex-row text-white">
                  <div class="flex block md:hidden">
                     {serviceMenuItems && (
                      <div class="w-full pb-5">
                          <p class="footer-menu-title mb-7 text-[1rem] font-body font-semibold leading-[1.5rem] text-left">Services</p>
                          <ul class="footer-menu text-left  space-y-1">
                            {serviceMenuItems
                              .map((item, index) => (
                                <li key={`serviceItem${index}`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                    to={item.path} style={{ textDecoration: 'none' }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                        </div> 
                    )}
                    {companyMenuItems && (
                        <div class="w-full pb-5">
                          <p class="footer-menu-title mb-7 text-[1rem] font-body font-semibold leading-[1.5rem] text-left">Company</p>
                          <ul className="footer-menu text-left  space-y-1">
                            {companyMenuItems
                              .map((item, index) => (
                                <li key={`companyItem${index}`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                    to={item.path} style={{ textDecoration: 'none' }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                        </div> 
                    )}
                  </div>

                    {serviceMenuItems && (
                      <div class="w-full pb-5 hidden md:block">
                          <p class="footer-menu-title mb-7 text-[1rem] font-body font-semibold leading-[1.5rem] text-left">Services</p>
                          <ul class="footer-menu text-left  space-y-1">
                            {serviceMenuItems
                              .map((item, index) => (
                                <li key={`serviceItem${index}`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                    to={item.path} style={{ textDecoration: 'none' }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                      </div> 
                    )}
                    {companyMenuItems && (
                        <div class="w-full pb-5 hidden md:block">
                          <p class="footer-menu-title mb-7 text-[1rem] font-body font-semibold leading-[1.5rem] text-left">Company</p>
                          <ul className="footer-menu text-left  space-y-1">
                            {companyMenuItems
                              .map((item, index) => (
                                <li key={`companyItem${index}`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                    to={item.path} style={{ textDecoration: 'none' }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                        </div> 
                    )}

                    <div class="w-1/2 md:w-full pb-5">
                      <p class="footer-menu-title mb-7 text-[1rem] font-body font-semibold leading-[1.5rem] text-left">Contact</p>
                        <ul className="footer-menu text-left space-y-3">
                            <li key={`companyItem0`}>
                                <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                  to="" style={{ textDecoration: 'none' }}
                                >
                                  {data.contactInfo.address}
                                </Link>
                                <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                  to="" style={{ textDecoration: 'none' }}
                                >
                                </Link>
                              </li>
                              <li key={`companyItem1`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                  to="" style={{ textDecoration: 'none' }}
                                >
                                  {data.contactInfo.phonenumber}
                                </Link>
                              </li>
                              <li key={`companyItem2`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                  to="" style={{ textDecoration: 'none' }}
                                >
                                  {data.contactInfo.email}
                                </Link>
                              </li>
                              <li key={`companyItem3`}>
                                  <Link class="text-white font-body font-normal text-[0.875rem] leading-[1.25rem]"
                                  to="" style={{ textDecoration: 'none' }}
                                >
                                  {data.contactInfo.license}
                                </Link>
                              </li>
                          </ul>
                    </div> 


                    <div className="flex items-right justify-start space-x-5 block md:hidden">
                      <a
                        href={data.siteSettings.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white no-underline hover:text-primary-500"
                      >
                        <i className="fab fa-facebook-f text-xl"></i>
                      </a>
                      <a
                        href={data.siteSettings.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white no-underline hover:text-primary-500"
                      >
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </div> 
                </div>
            </div>
          </div>
          
          <div className="container grid sm:inline-block">
            <ul className="flex flex-wrap items-center md:space-x-4 float-left py-5">
              <div className="flex w-full flex-col flex-wrap items-center justify-center space-y-3 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
                <li className="font-body text-sm text-white/70">
                  © {getYear()} Ranchview Senior Assisted living
                </li>
                <li>
                  <Link
                    to="/privacy-policy/"
                    className="font-body text-sm font-normal text-white/70 no-underline hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/privacy-policy/"
                    className="font-body text-sm font-normal text-white/70 no-underline hover:text-white"
                  >
                    Accesbility Statement
                  </Link>
                </li> */}
                <li>
                  <div className="text-sm">
                    <a
                      className="group flex items-center justify-center space-x-1 text-sm font-normal text-white/70 no-underline hover:text-white md:justify-start"
                      // href=""
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      
                      Powered by{" "}
                      <img src={nest} alt="NEST logo" className="ml-1" />
                    </a>
                  </div>
                </li>                
              </div>
            </ul>
            <div className="float-right py-5 hidden md:block">
              <div className="flex items-right justify-center space-x-5">
              {/* <div className="mb-16 flex items-right justify-center space-x-10 md:mb-7"> */}
                  <a
                    href={data.siteSettings.facebookUrl}
                    // href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline hover:text-primary-500"
                  >
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a
                    href={data.siteSettings.twitterUrl}
                    // href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline hover:text-primary-500"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div> 
            </div>
          </div>
        </div>
          
      </footer>

      <ModalContact contactInfo={contactInfo} />
    </>
  );
};


export default Footer;
