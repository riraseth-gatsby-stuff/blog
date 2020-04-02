const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const {
    data: {
      allMdx: { edges: posts }
    }
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              id
            }
          }
        }
      }
    }
  `);
  const postTemplate = path.resolve(`src/templates/post-template.js`);
  posts.forEach(({ node }) => {
    const { id } = node.frontmatter;
    createPage({
      path: id, // shows in the url
      component: postTemplate,
      context: {
        slug: id
      }
    });
  });
};
