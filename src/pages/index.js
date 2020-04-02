import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { graphql, useStaticQuery } from 'gatsby';

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            id
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  return (
    <Layout>
      <PostList posts={posts}></PostList>
    </Layout>
  );
};
