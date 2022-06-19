export default {
   widgets: [
      { name: "structure-menu" },
      {
         name: "project-info",
         layout: { width: "medium" },
         options: {
            data: [
               {
                  title: "GitHub repo",
                  value: "https://github.com/Wise-Digital-Partners/ranchview",
                  category: "Code",
               },
               {
                  title: "Frontend",
                  value: "https://coach-joe.netlify.app",
                  category: "apps",
               },
            ],
         },
      },
      { name: "project-users", layout: { width: "small" } },
      {
         name: "document-list",
         options: {
            title: "Recent blog posts",
            order: "_createdAt desc",
            types: ["post"],
         },
         layout: { width: "medium" },
      },
   ],
};
