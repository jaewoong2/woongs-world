import { graphql, PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"

interface AboutPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default function About({ data } : AboutPageProps) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

// pages 폴더에 있는 것은 이렇게 
export const query = graphql`
  query {
      site {
          siteMetadata {
            title
          }
      }
  }
`