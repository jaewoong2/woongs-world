import React from "react"
import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 700px;
    padding: ${rhythm(2)};
    padding-top: ${rhythm(1.5)};

    .title {
      margin-bottom: ${rhythm(2)};
      display: inline-block;
      font-style: normal;
    }

    .link-about {
      float: right;
    }
`


const Layout: React.FC = ({ children }) => {

    // nonPage components -> staticQuery

  return (
    <Container>
      <Link to={`/`}>
        <h3 className="title">
          -Jaewoong2
        </h3>
      </Link>
      <Link
        to={`/about/`}
        className="link-about"
      >
        About
      </Link>
      {children}
    </Container>
  )
}

export default Layout