import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "katex/dist/katex.min.css"

function BlogIndex (props) {
  const { data } = props;
  const [blogCount, setBlogCount] = useState(1);
  const [bakedCount, setBakedCount] = useState(1);
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.type === "post")
  const baked = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.type === "baked")
  
  return (
    <Layout location={props.location}  title={siteTitle}>
      <SEO title="Ten's Thoughts" />
      <Bio />
      <h2>Half-Baked Ideas 👨‍🍳</h2>
      {BlogList({ posts: baked, blogCount: bakedCount, setBlogCount: setBakedCount })}
      <h2>Writings ✍️</h2>
      {BlogList({ posts, blogCount, setBlogCount })}
      <h2>Brain farts 🧠💨</h2>
      <a className="twitter-timeline" data-height="600" href="https://twitter.com/tzyinc?ref_src=twsrc%5Etfw">Tweets by tzyinc</a>
    </Layout>
  );
}

function BlogList({posts, blogCount, setBlogCount}) {
  return (<React.Fragment>
    <div style={
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
    }>
      {((blogCount - 1) > 0) ? <button onClick={() => ((blogCount - 1) > 0) ? setBlogCount(blogCount - 1) : setBlogCount(Math.floor(posts.length / 5))}>{`< prev`}</button> : <div />}
      {((blogCount + 1) * 5 < posts.length) ? <button onClick={() => ((blogCount + 1) * 5 < posts.length) ? setBlogCount(blogCount + 1) : setBlogCount(1)}>{`next >`}</button> : <div />}
    </div>

    {
      posts.filter((_, index) => index >= (blogCount * 5 - 5) && index < blogCount * 5).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })
    }
  </React.Fragment>)
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            type
          }
        }
      }
    }
  }
`
