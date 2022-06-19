export default {
    title: "Services",
    name: "services",
    type: "document",
    fields: [
         {
            title: "Title",
            name: "title",
            type: "string",
         },
         {
            title: "Slug",
            description: "Exclude leading and trailing backslashes",
            name: "slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
               source: "title",
            },
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
    ],
    
 };
 