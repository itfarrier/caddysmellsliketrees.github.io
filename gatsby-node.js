const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    const slug = "lyrics" + createFilePath({ node, getNode }).slice(0, -1);
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.map(({ node }) => {
          return createPage({
            path: node.fields.slug,
            component: path.resolve("./src/templates/lyricsTemplate.js"),
            context: {
              slug: node.fields.slug
            }
          });
        });
        resolve();
      })
      .catch(reject => console.log(reject));
  });
};
