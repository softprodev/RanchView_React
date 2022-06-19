export default {
    title: "Amenities",
    name: "amenities",
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
         name: 'backgroundimage',
         title: 'Background Image',
         type: 'defaultImage'
       },  
       {
         name: 'mobilebackgroundimage',
         title: 'Background Image - Mobile',
         type: 'defaultImage'
       },  
      {
         title: "Second Section Title",
         name: "secondsectiontitle",
         type: "string",
      },  
      {
         title: "Second Section Content Array",
         name: "secondsectioncontentarray",
         type: "array",
         of: [
            {
               title: "Content",
               type: "string",               
            },
         ],
      },
      {
         title: "Second Section Content",
         name: "secondsectioncontent",
         type: "text",
      }, 
      {
         title: "Third Section Title",
         name: "thirdsectiontitle",
         type: "string",
      },  
      {
         title: "Third Section Content",
         name: "thirdsectioncontent",
         type: "text",
      }, 
    ],
    orderings: [
       {
          title: "A>Z",
          name: "alphabeticalAsc",
          by: [
             {
                field: "title",
                direction: "asc",
             },
          ],
       },
       {
          title: "Z->A",
          name: "alphabeticalDesc",
          by: [
             {
                field: "title",
                direction: "desc",
             },
          ],
       },
    ],
 };
 