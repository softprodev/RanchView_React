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
      {
         title: "Sub Title 1",
         name: "subtitle1",
         type: "string",
      },
      {
         title: "Sub Description 1",
         name: "description1",
         type: "bodyPortableText",
      },
      {
         title: "Sub Title 2",
         name: "subtitle2",
         type: "string",
      },
      {
         title: "Sub Description 2",
         name: "description2",
         type: "bodyPortableText",
      },
      {
         title: "Sub Title 3",
         name: "subtitle3",
         type: "string",
      },
      {
         title: "Sub Description 3",
         name: "description3",
         type: "bodyPortableText",
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
 