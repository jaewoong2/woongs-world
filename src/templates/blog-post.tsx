import React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost() {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark {
          html
          frontmatter {
            title
          }
        }
      }
    `
)
  const post = data.markdownRemark
  
  return (
    <Layout>
      <div>
        <h1 className="text">{post.frontmatter.title}</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

// interface BlogPostProps extends PageProps {
//   data: {
//     markdownRemark: {
//       html: string,
//       frontmatter: {
//         title: string
//       }
//     }
//   }
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `