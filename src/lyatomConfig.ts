import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  branch: "main", // Branch to update
  repo: "JulesEfrei/lyatom-test", // Follows the pattern [org-or-username]/[repo-name]
  urlForLogin: "admin", // url for access of the panelAdmin
  mediaFolder: "/src/assets/", // root path to the media files
  title: "Test Lyatom CMS", // title in the PanelAdmin
  type: "firstLvl", // start always with this
  fields: [
    {
      type: "section", // start second with this its to create first section on Panel
      title: "Section 1",
      file: "/src/data/data.json", // root path specifies info of the first section
      fields: [
        {
          type: "input",
          title: "Title", // printing on AdminPanel
          id: "title", // key reference in the file ( info.json)
          htmlId: "title-example-id", // id to write in the html for real time editing
        },
        {
          type: "input",
          title: "paragraph",
          id: "paragraph",
          htmlId: "subtile-example-id",
        },
        {
          type: "image",
          title: "Logo",
          id: "image",
          htmlId: "logo-example-id",
        },
      ],
    },
    {
      type: "section",
      title: "Section 2",
      file: "/src/data/data.json", // root path specifies info of the first section
      fields: [
        {
          type: "object",
          title: "Link",
          id: "link",
          fields: [
            {
              type: "input",
              title: "Text",
              id: "text",
              htmlId: "object-example"
            },
            {
              type: "input",
              title: "Href",
              id: "link",
              htmlId: "object-example"
            },
          ]
        }
      ]
    },
  ],
};
export default data;
