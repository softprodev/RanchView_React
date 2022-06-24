export default {
    title: "Hospice Care",
    name: "hospicecare",
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
         title: "Title 1",
         name: "subtitle1",
         type: "string",
      },  
      {
         title: "Description 1",
         name: "subdescription1",
         type: "bodyPortableText",
      }, 
      {
        title: "Title 2",
        name: "title2",
        type: "string",
     },  
     {
        title: "Description 2",
        name: "subdescription2",
        type: "bodyPortableText",
     }, 
     {
        title: "Title 3",
        name: "subtitle3",
        type: "string",
     },  
     {
        title: "Description 3",
        name: "subdescription3",
        type: "bodyPortableText",
     },
     {
      title: "CTA Content",
      name: "subctacontent",
      type: "text",
   },
    ],    
 };
 