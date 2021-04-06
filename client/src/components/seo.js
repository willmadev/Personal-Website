import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO ({ title, description, keywords, lang}) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    author: defaultAuthor
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} - Willma's Here` : defaultTitle,
    description: description || defaultDescription,
    keywords: keywords ? keywords.join(",") : "",
    lang: lang || "",
    author: defaultAuthor
  }


  return (
    <Helmet 
      htmlAttributes={{
        lang: seo.lang,
      }}
      title={ seo.title }
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: "keywords",
          content: seo.keywords,
        },
        {
          property: "og:title",
          content: seo.title
        },
        {
          property: "og:description",
          content: seo.description
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:creator",
          content: seo.author
        },
        {
          name: "twitter:title",
          content: seo.title
        },
        {
          name: "twitter.description",
          content: seo.description
        }
      ]} 
    />
  )
}

const query = graphql`
  query SEO {
    site{
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`