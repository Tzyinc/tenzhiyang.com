import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            width: '100%',
            padding: 20,
            background: `linear-gradient(white 2px, transparent 2px)-2px -2px/100px 100px,
linear-gradient(90deg, white 2px, transparent 2px)-2px -2px/100px 100px,
linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px)-1px -1px/20px 20px,
linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)-1px -1px/20px 20px, #457B9D`,
            color: 'white',
            textShadow: `-1px -1px 0 #1D3557,
              1px -1px 0 #1D3557,
              -1px 1px 0 #1D3557,
               1px 1px 0 #1D3557`,
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        {location.pathname === rootPath ?
        <main style={{ marginTop: 100 }}>{children}</main>
      :
      <main>{children}</main>}
        <footer>
          <a href={`https://twitter.com/tzyinc`}>
            Twitter
          </a>
          {" • "}
          <a href={"https://drive.google.com/open?id=1iVoWXxYpAlL2QG3O9bFFXqX6lJw-JbdcX9gfYw7gIzU"}>
            CV
          </a>
        </footer>
      </div>
    )
  }
}

export default Layout
