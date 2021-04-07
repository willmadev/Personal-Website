import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const { t } = useTranslation();
  return(
    <Layout pageTitle={t("404:pageTitle", "Page Not Found")}>
      <SEO title={t("404:pageTitle", "Page Not Found")} />
      <p>{t("404:description", "Here are some links that may be helpful:")}</p>
      <ul>
        <li><Link to="/">{t("common:links.home", "Home")}</Link></li>
        <li><Link to="/about">{t("common:links.about", "About")}</Link></li>
        <li><Link to="/projects">{t("common:links.projects", "Projects")}</Link></li>
        <li><Link to="/contact">{t("common:links.contact", "Contact")}</Link></li>
      </ul>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {ns: {in: ["404", "common"]}, language: {eq: $language}}
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
`;