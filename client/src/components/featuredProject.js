import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"

import * as styles from "../styles/featuredProject.module.css"

import Button from "./button"
import { GatsbyImage } from "gatsby-plugin-image"

export default function FeaturedProject() {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}, limit: 1) {
                    nodes {
                        frontmatter {
                            title
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
            }
        `
    )
    const frontmatter = data.allMarkdownRemark.nodes[0].frontmatter
    const fields = data.allMarkdownRemark.nodes[0].fields
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <h2>{t("home:featuredProject.header", "My Latest Project")}</h2>
            <div className={styles.projectContainer}>
                <GatsbyImage className={styles.image} placeholder="blurred" image={fields.featuredImage.childImageSharp.gatsbyImageData} />
                <h3 className={styles.title}>{frontmatter.title}</h3>
                <p className={styles.summary}>{frontmatter.summary}</p>
                <div className={styles.button}>
                    <Button>
                        <Link to={fields.slug}>{t("common:button.keepReading", "Keep Reading")}</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}