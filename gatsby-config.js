const { version } = require("pdfjs-dist/package.json");

module.exports = {
  siteMetadata: {
    title: "Hailey Robertson",
    description: " ",
    author: "Hailey Robertson",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
