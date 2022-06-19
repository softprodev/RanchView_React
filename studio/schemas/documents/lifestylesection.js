export default {
    title: "Life Style Section Info",
    name: "lifestylesection",
    type: "document",
    fields: [
       {
          title: "Title",
          name: "name",
          type: "string",
       },
       {
        title: "Item Title 1",
        name: "title1",
        type: "string",
        },
       {
          title: "Item Description 1",
          name: "description1",
          type: "text",
       },
       {
        title: "Item Slug 1",
        description: "Exclude leading and trailing backslashes",
        name: "slug1",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: {
           source: "title",
        },
        },
       {
          title: "Item Image 1",
          name: "image1",
          type: "image",
       },
       {
        title: "Item Title 2",
        name: "title2",
        type: "string",
        },
       {
          title: "Item Description 2",
          name: "description2",
          type: "text",
       },
       {
        title: "Item Slug 2",
        description: "Exclude leading and trailing backslashes",
        name: "slug2",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: {
           source: "title",
        },
        },
       {
          title: "Item Image 2",
          name: "image2",
          type: "image",
       },
       {
        title: "Item Title 3",
        name: "title3",
        type: "string",
        },
       {
          title: "Item Description 3",
          name: "description3",
          type: "text",
       },
       {
        title: "Item Slug 3",
        description: "Exclude leading and trailing backslashes",
        name: "slug3",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: {
           source: "title",
        },
        },
       {
          title: "Item Image 3",
          name: "image3",
          type: "image",
       },
    ],
    preview: {
       select: {
          title: "name",
          media: "image1",
       },
    },
 };
 