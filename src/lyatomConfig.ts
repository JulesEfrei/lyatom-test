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
      title: "Home",
      file: "/data/data.json", // root path specifies info of the first section
      fields: [
        {
          type: "input",
          title: "Paragraph", // printing on AdminPanel
          id: "paragraph", // key reference in the file ( info.json)
          htmlId: "paragraph", // id to write in the html for real time editing
        },
        {
          type: "input",
          title: "Link Text",
          id: "link.text",
          htmlId: "link-test",
        },
      ],
    },
  ],
};
export default data;
