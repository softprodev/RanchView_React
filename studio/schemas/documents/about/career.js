export default {
   title: "CareerInfo",
   name: "career",
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
         title: "Body",
         name: "body",
         type: "bodyPortableText",
      },
      {
         title: "Sub Title 1",
         name: "subtitle1",
         type: "string",
      },
      {
         title: "Detail 1",
         name: "subdetail1",
         type: "bodyPortableText",
      },
      {
         title: "Sub Title 2",
         name: "subtitle2",
         type: "string",
      },
      {
         title: "Detail 2",
         name: "subdetail2",
         type: "bodyPortableText",
      },
      {
         title: "Sub Title 3",
         name: "subtitle3",
         type: "string",
      },
      {
         title: "Detail 3",
         name: "subdetail3",
         type: "bodyPortableText",
      },
      {
         title: "Sub Title 4",
         name: "subtitle4",
         type: "string",
      },
      {
         title: "Detail 4",
         name: "subdetail4",
         type: "bodyPortableText",
      },
      {
         title: "Job Listing",
         name: "joblisting",
         type: "array",
         of: [
            {
               title: "Reference to Jobs",
               validation: (Rule) => Rule.required(),
               options: {
                  disableNew: true,
               },
               type: "reference",
               to: {
                  type: "jobs",
               },
            },
         ],         
      },
   ],
};
