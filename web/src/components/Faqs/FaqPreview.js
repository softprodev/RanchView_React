import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "gatsby-plugin-transition-link";
// import { differenceInDays, formatDistance, format } from "date-fns";

import { getBlogUrl } from "../../lib/helpers";
// import { getBlogUrl, toPlainText } from "../../lib/helpers";
// import PortableText from "./portableText";

function FaqPreview(props) {
  // const truncate = (str) => {
  //   return str.length > 200 ? str.substring(0, 200) + "..." : str;
  // };

  return (
    <p>{props.question} / {props.answer}</p>
  );
}

export default FaqPreview;
