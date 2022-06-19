export default {
    title: "Enriching Experiences",
    name: "enrichingexperiences",
    type: "document",
    fields: [
       {
          title: "Title",
          name: "title",
          type: "string",
       },
       {
        title: "Description",
        name: "description",
        type: "text",
       },
       {
         name: 'bgimage',
         title: 'Background Image',
         type: 'defaultImage'
       }, 
       {
        name: 'mobilebgimage',
        title: 'Mobile Background Image',
        type: 'defaultImage'
      }, 
      {
         title: "Title 1 - Intro/How We Care Heading",
         name: "title1",
         type: "string",
      },  
      {
         title: "Description 1",
         name: "description1",
         type: "text",
      }, 
      {
        title: "Title 2 - What to expect",
        name: "title2",
        type: "string",
     },  
     {
        title: "Description 2",
        name: "description2",
        type: "text",
     }, 
     {
        title: "Title 3 - The Transition / How to Prepare",
        name: "title3",
        type: "string",
     },  
     {
        title: "Description 3",
        name: "description3",
        type: "text",
     },
    ],    
 };
 