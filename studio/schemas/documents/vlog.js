export default {
  title: "Vlog",
  name: "vlog",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Vimeo Video ID",
      name: "vimeoVideoID",
      type: "string",
    },
    {
      title: "Vimeo Video Poster",
      name: "vimeoVideoPoster",
      type: "url",
    },
    {
      title: "Order",
      name: "order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Publishing date new–>old",
      name: "publishingDateDesc",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "desc",
        },
      ],
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateAsc",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
    },
    prepare({ title = "No title", slug = {}, media }) {
      return {
        title,
        media,
      };
    },
  },
};
