import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../styles/projects.module.css"

export default function Projects({ data }) {
    console.log(data)
    return (
        <div>
            <SEO title=""
                description=""
                keywords=""
                lang=""
            />
            <Layout pageTitle="Projects">
                <div className={styles.container}>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Link to={node.frontmatter.path} key={node.id} className={styles.projectCard}>
                            <GatsbyImage className={styles.projectCardImage} image={node.fields.featuredImage.childImageSharp.gatsbyImageData}/>
                            <div className={styles.projectCardBody}>
                                <h2>{node.frontmatter.title}</h2>
                                <p>{node.frontmatter.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
            node {
                frontmatter {
                    path
                    title
                    date
                    summary
                }
                fields {
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            id
            }
        }
    }
}  
`