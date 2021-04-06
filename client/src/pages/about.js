import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaDownload, FaPhoneAlt } from "react-icons/fa"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import Button from "../components/button"
import Layout from "../components/layout"

import resumeFile from "/static/resume.pdf"

import * as styles from "../styles/about.module.css"
import SEO from "../components/seo"

export default function About(){
    const {t} = useTranslation();
    return(
        <div>
            <SEO 
                title="About"
                description="I'm a full stack web developer based in Hong Kong and California. Learn more about me here!"
                keywords={["Willma", "Developer", "About", "For Hire", "Full Stack Web Developer"]}
                lang="en"
            />
            <Layout pageTitle={t("about:pageTitle","About")}>
                <div className={styles.contentContainer}>
                    <StaticImage className={styles.image} placeholder="blurred" src="../images/headshot.png"/>
                    <h2 className={styles.header}>{t("about:header", "HI! I'M WILLMA")}</h2>
                    <p className={styles.description}>
                        {t("about:description", "I'm a junior at The Webb Schools in California, and I'm based in Hong Kong. Over the years, I have learned a lot about multiple areas, from game development to web development. I am currently learning full stack web development with the MERN stack (which is what this website is built on).")}                        
                    </p>
                    <div className={styles.buttons}>
                        <Button>
                            <a href={resumeFile} target="_blank" rel="noreferrer"><FaDownload className={styles.btnIcon}/> {t("common:button.seeResume", "See Resume")}</a>
                        </Button>
                        <Button>
                            <Link to="/contact/"><FaPhoneAlt className={styles.btnIcon}/> {t("common:button.contactMe", "Contact Me")}</Link>
                        </Button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {ns: {in: ["about", "common"]}, language: {eq: $language}}
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