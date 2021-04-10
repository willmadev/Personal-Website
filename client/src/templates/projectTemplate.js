import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "../styles/projectTemplate.module.css"
import "../styles/gist.css"

export default function Template({data}) {
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
                <div className={styles.frontmatter}>
                    <div className={styles.meta}>
                        <p className={styles.date}>
                            Written by Willma | Last Updated {frontmatter.date}
                        </p>
                        <p className={styles.summary}>{frontmatter.summary}</p>
                    </div>
                    <GatsbyImage image={markdownRemark.fields.featuredImage.childImageSharp.gatsbyImageData} />
                </div>
                <div className={styles.main} dangerouslySetInnerHTML={{ __html: html }} />
            </Layout>
        </div>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date (formatString: "MMMM DD, YYYY")
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
    }
`