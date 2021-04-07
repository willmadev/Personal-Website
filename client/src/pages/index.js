import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
import Button from "../components/button"
import FeaturedProject from "../components/featuredProject"

import * as styles from "../styles/index.module.css"

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <SEO 
        title="Home" 
        description="Hi! I'm Willma. I'm a student and full stack web developer based in Hong Kong and California. Learn more about me!" 
        keywords={["Willma", "Developer"]}
        lang="en"
      />
      <Header/>
      <div>
        <div className={styles.landing}>
          <StaticImage className={styles.landingImage} src="../images/home_background.png" placeholder="blurred" objectFit="cover" objectPosition="70% 50%" alt="Background iamge of Willma"/>
          <div className={styles.landingContainer}>
            <h1 className={styles.landingTitle}>Willma's Here</h1>
            <p className={styles.landingCaption}>{t("home:landing.landingCaption", "Student | Developer")}</p>
          </div>
        </div>
        <div className={styles.about}>
          <h2>{t("home:about.header", "About Me")}</h2>
          <p>{t("home:about.description","Hi! I'm Willma. I'm a junior at The Webb Schools in California, and I'm based in Hong Kong. Over the years, I have learned a lot about multiple areas, from game development to web development. I am currently learning React and Gatsby, as well as Node JS.")}</p>
          <Button><Link to="/about/">{t("common:button.learnMore", "Learn More")}</Link></Button>
        </div>
        <hr />
        <FeaturedProject/>
      </div>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {ns: {in: ["home", "common"]}, language: {eq: $language}}
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