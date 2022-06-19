export default {
    title: "AboutUs",
    name: "aboutus",
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
         name: 'background',
         title: 'Background Image',
         type: 'defaultImage'
       },  
       {
         name: 'mobilebackground',
         title: 'Background Image - Mobile',
         type: 'defaultImage'
       },  
      {
         title: "Heading 1 Title",
         name: "headingtitle1",
         type: "string",
      },  
      {
         title: "Heading 1 Description",
         name: "headingdescription1",
         type: "text",
      }, 
      {
        name: 'headingimage1',
        title: 'Heading 1 Image',
        type: 'defaultImage'
      },
      {
         title: "Heading 2 Title",
         name: "headingtitle2",
         type: "string",
      },  
      {
         title: "Heading 2 Description",
         name: "headingdescription2",
         type: "text",
      }, 
      {
        name: 'headingimage2',
        title: 'Heading 2 Image',
        type: 'defaultImage'
      },
      {
         title: "Heading 3 Title",
         name: "headingtitle3",
         type: "string",
      },  
      {
         title: "Heading 3 Description",
         name: "headingdescription3",
         type: "text",
      }, 
      {
        name: 'headingimage3',
        title: 'Heading 3 Image',
        type: 'defaultImage'
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
 