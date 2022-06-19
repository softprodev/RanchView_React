export default {
   title: "Blog Author",
   name: "blogAuthors",
   type: "document",
   fields: [
      {
         title: "Name",
         name: "name",
         type: "string",
      },
      {
         title: "Description",
         name: "description",
         type: "text",
      },
      {
         title: "Profile Image",
         name: "image",
         type: "image",
      },
   ],
   preview: {
      select: {
         title: "name",
         media: "image",
      },
   },
};
