import React from "react";
import Link from "gatsby-plugin-transition-link";
import { StaticImage } from "gatsby-plugin-image";

import ModalContact from "../Modal/ModalContact";
import nest from "../../images/Global/Footer/Nest Logo.svg";


import {
  footerMenuItems,
  socialMenuItems,
  serviceMenuItems,
  companyMenuItems,
  contactMenuItems
} from "../constants/menu-items"

const Footer = ({ hideFooter,contactInfo,siteSettings }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };


  const serviceMenuItems = [
    {
      name: "Assisted Living",
      href: "/assistedliving",
    },
    {
      name: "Alzheimer’s Care",
      href: "/alzheimerscare",
    },
    {
      name: "Dementia Care",
      href: "/dementiacare",
    },
    {
      name: "Respite Care",
      href: "/respitecare",
    },
    {
      name: "Hospice Care",
      href: "/hospicecare",
    },
    {
      name: "Enriching Experiences",
      href: "/enrichingexperiences",
    },
  ];

  const companyMenuItems = [
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Reviews",
      href: "/reviews",
    },
    {
      name: "Amenities",
      href: "/amenities",
    },
    {
      name: "Neighborhood",
      href: "/neighborhood",
    },
    {
      name: "FAQs",
      href: "/faqs",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Careers",
      href: "/careers",
    },
  ];

  const contactMenuItems = [
    {
      name: "350 Cole Ranch Road Encinitas, CA 92024",
      href: "",
    },
    {
      name: "(760) 753-5082",
      href: "",
    },
    {
      name: "email@emailaddress.com",
      href: "",
    },
    {
      name: "CA License #: 374603660",
      href: "",
    },
  ];


  return (
    <>
      <footer
        className={`bg-primary-900 pt-20 pb-10 md:pt-16 md:pb-3 ${
          hideFooter && "hidden"
        }`}
      >
        <div className="container">
          
          <div class="md:flex ...">
            <div class="md:w-2/5 text-center py-10 ...">
                <Link to="/">
                  <StaticImage
                    src="../../images/Global/Logo/logo-white.png"
                    alt="Ranchview Logo"
                    loading="lazy"
                    width={317}
                  />
                </Link>
            </div>  
            <div class="md:w-3/5 py-10 ...">
                <div class="sm:flex text-white">
                    {serviceMenuItems && (
                      <div class="w-full pb-5">
                          <p class="footer-menu-title mb-7 text-2xl text-center sm:text-left">Services</p>
                          <ul class="footer-menu text-center sm:text-left">
                            {serviceMenuItems
                              .map((item, index) => (
                                <li key={`serviceItem${index}`}>
                                  <Link class="text-white"
                                    to={item.href} style={{ textDecoration: 'none' }}
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
                          <p class="footer-menu-title  mb-7 text-2xl text-center sm:text-left">Company</p>
                          <ul className="footer-menu text-center sm:text-left">
                            {companyMenuItems
                              .map((item, index) => (
                                <li key={`companyItem${index}`}>
                                  <Link class="text-white"
                                    to={item.href} style={{ textDecoration: 'none' }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                        </div> 
                    )}

                    
                    {/* {contactMenuItems && ( */}
                        <div class="w-full pb-5">
                          <p class="footer-menu-title mb-7 text-2xl text-center sm:text-left">Contact</p>
                          <ul className="footer-menu text-center sm:text-left">
                            {/* {contactMenuItems
                              .map((item, index) => (
                                <li key={`companyItem${index}`}>
                                  <Link class="text-white" 
                                    to={item.href} style={{ textDecoration: 'none' }}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))} */}
                              <li key={`companyItem0`}>
                                  <Link class="text-white" 
                                    to="" style={{ textDecoration: 'none' }}
                                  >
                                    {contactInfo.address}
                                  </Link>
                                </li>
                                <li key={`companyItem1`}>
                                  <Link class="text-white" 
                                    to="" style={{ textDecoration: 'none' }}
                                  >
                                    {contactInfo.phonenumber}
                                  </Link>
                                </li>
                                <li key={`companyItem2`}>
                                  <Link class="text-white" 
                                    to="" style={{ textDecoration: 'none' }}
                                  >
                                    {contactInfo.email}
                                  </Link>
                                </li>
                                <li key={`companyItem3`}>
                                  <Link class="text-white" 
                                    to="" style={{ textDecoration: 'none' }}
                                  >
                                    {contactInfo.license}
                                  </Link>
                                </li>
                            </ul>
                        </div> 
                    {/* )} */}
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
                <li>
                  <Link
                    to="/privacy-policy/"
                    className="font-body text-sm font-normal text-white/70 no-underline hover:text-white"
                  >
                    Accesbility Statement
                  </Link>
                </li>
                <li>
                  <div className="text-sm">
                    <a
                      className="group flex items-center justify-center space-x-1 text-sm font-normal text-white/70 no-underline hover:text-white md:justify-start"
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Powered by{" "}
                      <img src={nest} alt="NEST logo" className="ml-1" />
                    </a>
                  </div>
                </li>                
              </div>
            </ul>
            <div className="float-right py-5">
              <div className="flex items-right justify-center space-x-5">
              {/* <div className="mb-16 flex items-right justify-center space-x-10 md:mb-7"> */}
                  <a
                    href={siteSettings.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline hover:text-primary-500"
                  >
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a
                    href={siteSettings.twitterUrl}
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
