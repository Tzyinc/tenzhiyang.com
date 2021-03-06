import React, { useState, useEffect } from "react"
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
  const [tweetCount, setTweetCount] = useState(1);
  const [talkCount, setTalkCount] = useState(1);
  const [tweetList, setTweetList] = useState([]);
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.type === "post")
  const baked = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.type === "baked")
  const talks = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.type === "talk")
  const tweets = tweetList.filter(item => !item.in_reply_to_status_id && !item.quoted_status && !item.retweeted_status);

  useEffect(() => {
    // get data from GitHub api
    fetch(`https://blogbackend.tenzhiyang.com/tweets`)
      .then(response => response.json()) // parse JSON from request
      .then(result => {
        setTweetList(result)
      }) // set data for the number of stars
  }, [])
  
  return (
    <Layout location={props.location}  title={siteTitle}>
      <SEO title="Ten's Thoughts" />
      <Bio />
      {
        baked.length > 0 && (
          <React.Fragment>
            <h2>Half-Baked Ideas <span role="img" aria-label="male chef">👨‍🍳</span></h2>
            {BlogList({ posts: baked, blogCount: bakedCount, setBlogCount: setBakedCount })}
          </React.Fragment>
        )
      }
      {
        posts.length > 0 && (
          <React.Fragment>
            <h2>Writings <span role="img" aria-label="writing hand">✍️</span></h2>
            {BlogList({ posts, blogCount, setBlogCount })}
          </React.Fragment>
        )
      }
      {
        talks.length > 0 && (
          <React.Fragment>
            <h2>Talks <span role="img" aria-label="talking head">🗣️</span></h2>
            {BlogList({ posts: talks, blogCount: talkCount, setBlogCount: setTalkCount })}
          </React.Fragment>
        )
      }
      {
        tweets.length > 0 && (
          <React.Fragment>
            <h2>Brain farts <span role="img" aria-label="brain and wind">🧠💨</span></h2>
            {Tweets({ posts: tweets, blogCount: tweetCount, setBlogCount: setTweetCount})}
          </React.Fragment>
        )
      }
    </Layout>
  );
}

function Tweets({ posts, blogCount, setBlogCount }) {

  return (<React.Fragment>
    <div style={
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
    }>
      {((blogCount - 1) > 0) ? <button onClick={() => ((blogCount - 1) > 0) ? setBlogCount(blogCount - 1) : setBlogCount(Math.floor(posts.length / 5))}>{`< prev`}</button> : <div />}
      {(((blogCount + 1) * 5) - 5 < posts.length) ? <button onClick={() => (((blogCount + 1) * 5) - 5 < posts.length) ? setBlogCount(blogCount + 1) : setBlogCount(1)}>{`next >`}</button> : <div />}
    </div>
    {
      posts.filter((_, index) => index >= (blogCount * 5 - 5) && index < blogCount * 5).map((node, index) => {
        return (
          <div key={node.id}
            style={
            index !== 0 ? {
                paddingTop: "20px",
                borderTop: "1px solid var(--alt)",
                marginTop: "20px",
            } : {

            }}
            className="tweetSection"
          >
            <small>{generateDate(node.created_at)}</small>
            <p>
              <a style={{ boxShadow: `none`, textDecoration: `none` }} href={generateUrl(node.id_str)}>
                {node.text}
              </a>
            </p>
          </div>
        )
      })
    }
  </React.Fragment>)
}

function generateUrl(id) {
  return `https://twitter.com/tzyinc/status/${id}`
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function generateDate(dateStr) {
  const date = new Date(dateStr);
  const month = months[date.getMonth()];
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  return `${month} ${dd}, ${yyyy}`
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
      {(((blogCount + 1) * 5) - 5 < posts.length) ? <button onClick={() => (((blogCount + 1) * 5) - 5 < posts.length) ? setBlogCount(blogCount + 1) : setBlogCount(1)}>{`next >`}</button> : <div />}
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
