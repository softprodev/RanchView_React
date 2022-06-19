export default {
    title: "Contact Info",
    name: "contactinfo",
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
          title: "Phone Number",
          name: "phonenumber",
          type: "string",
       },
       {
        title: "Email",
        name: "email",
        type: "string",
       },
       {
        title: "Address",
        name: "address",
        type: "string",
       },
       {
        title: "License",
        name: "license",
        type: "string",
       },
       {
        title: "Book a Meeting Url",
        name: "bookingurl",
        type: "url",
       },
       {
        title: "Title of Questionnaire",
        name: "titleofquestionnaire",
        type: "string",
       },
       {
         name: 'questions',
         title: 'Contact Questions',
         type: 'array',
         of: [
            {
               title: "Content",
               type: "string",               
            },
         ],
       },  
    ]
 };
 