import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'
import * as Lang from '../constants'

import { ABOUT_TITLE } from '../constants'

export default ({ data, location }) => {
  const resumes = data.allMarkdownRemark.edges
  const { siteMetadata } = data.site

  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0]

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={ABOUT_TITLE} keywords={siteMetadata.keywords} />

      <div dangerouslySetInnerHTML={{ __html: resume.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
