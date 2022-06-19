import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "../styles/projectTemplate.module.css"

deckDeckGoHighlightElement()

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        keywords=""
        lang="en"
      />
      <Layout pageTitle={frontmatter.title}>
        <div>
          <div className={styles.meta}>
            <p className={styles.date}>
              Written by Willma | Last Updated {frontmatter.date}
            </p>
            <p className={styles.summary}>{frontmatter.summary}</p>
          </div>
          <GatsbyImage
            className={styles.featuredImage}
            image={
              markdownRemark.fields.featuredImage.childImageSharp
                .gatsbyImageData
            }
          />
        </div>
        <div
          className={styles.main}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!, $language: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        summary
      }
      fields {
        slug
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
