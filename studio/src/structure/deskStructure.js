import S from "@sanity/desk-tool/structure-builder";
// https://react-icons.github.io/react-icons/icons?name=fc
import { FcDocument, FcRating, FcReading, FcList,FcBusinessman,FcFolder,FcAssistant,FcConferenceCall, FcSettings,FcLike, FcLibrary,FcAbout,FcBusinessContact,FcFaq } from "react-icons/fc";
import IframePreview from "../previews/IframePreview";

import { MdBusiness, MdSettings } from 'react-icons/md'

// Web preview configuration
const remoteURL = "https://darkhorsecpa.gtsb.io";
const localURL = "http://localhost:8000";
const previewURL = window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
   /**
    * Here you can define fallback views for document types without
    * a structure definition for the document node. If you want different
    * fallbacks for different types, or document values (e.g. if there is a slug present)
    * you can set up that logic in here too.
    * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
    */

   return S.document().views([S.view.form(), S.view.component(IframePreview).options({ previewURL }).title("Preview")]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
   S.list()
      .title("Content")
      .items([
         

         S.listItem()
            .title('Site Settings')
            .schemaType("siteSettings")
            .child(S.documentTypeList("siteSettings").title("siteSettings"))
            .icon(FcSettings),

         S.listItem()
            .title("Services")
            .icon(FcFolder)
            .schemaType("services")
            .child(S.documentTypeList("services").title("Services")),
         S.listItem()
            .title('Assisted Living')
            .schemaType("assistedliving")
            .child(S.documentTypeList("assistedliving").title("Assisted Living"))
            .icon(FcLibrary),
         S.listItem()
            .title('Alzheimer\'s Care')
            .schemaType("alzheimerscare")
            .child(S.documentTypeList("alzheimerscare").title("Alzheimer\'s Care"))
            .icon(FcLibrary),
         S.listItem()
            .title('Dementia Care')
            .schemaType("dementiacare")
            .child(S.documentTypeList("dementiacare").title("Dementia Care"))
            .icon(FcLibrary),
         S.listItem()
            .title('Hospice Care')
            .schemaType("hospicecare")
            .child(S.documentTypeList("hospicecare").title("Hospice Care"))
            .icon(FcLibrary),
         S.listItem()
            .title('Respite Care')
            .schemaType("respitecare")
            .child(S.documentTypeList("respitecare").title("Respite Care"))
            .icon(FcLibrary),
         S.listItem()
            .title('Enriching Experiences')
            .schemaType("enrichingexperiences")
            .child(S.documentTypeList("enrichingexperiences").title("Enriching Experiences"))
            .icon(FcLibrary),

         S.listItem()
            .title('About Us')
            .schemaType("aboutus")
            .child(S.documentTypeList("aboutus").title("About Us"))
            .icon(FcAbout),         
         S.listItem()
            .title('Amenities')
            .schemaType("amenities")
            .child(S.documentTypeList("amenities").title("Amenities"))
            .icon(FcLike),
         S.listItem()
            .title('Neighborhood')
            .schemaType("neighborhood")
            .child(S.documentTypeList("neighborhood").title("Neighborhood"))
            .icon(FcConferenceCall),
         S.listItem()
            .title('FAQs')
            .schemaType("faqs")
            .child(S.documentTypeList("faqs").title("FAQs"))
            .icon(FcFaq),
         S.listItem()
            .title('Career Info')
            .schemaType("career")
            .child(S.documentTypeList("career").title("Career Info"))
            .icon(FcBusinessman),



         S.listItem()
            .title('Contact Info')
            .schemaType("contactinfo")
            .child(S.documentTypeList("contactinfo").title("Contact Info"))
            .icon(FcBusinessContact),



         S.listItem().title("Blogs").icon(FcDocument).schemaType("blogs").child(S.documentTypeList("blogs").title("Blogs")),

         S.listItem().title("Blog Authors").icon(FcReading).schemaType("blogAuthors").child(S.documentTypeList("blogAuthors").title("Blog Authors")),

         S.listItem()
            .title("Blog Categories")
            .icon(FcList)
            .schemaType("blogCategories")
            .child(S.documentTypeList("blogCategories").title("Blog Categories")),

         S.listItem()
            .title("Testimonials")
            .icon(FcRating)
            .schemaType("testimonials")
            .child(S.documentTypeList("testimonials").title("Testimonials")),

         S.listItem()
            .title("Testimonial Categories")
            .icon(FcList)
            .schemaType("testimonialCategories")
            .child(S.documentTypeList("testimonialCategories").title("Testimonial Categories")),
        
         S.listItem()
            .title("Life Style Section Info")
            .icon(FcList)
            .schemaType("lifestylesection")
            .child(S.documentTypeList("lifestylesection").title("Life Style Section Info")),

         
      ]);
