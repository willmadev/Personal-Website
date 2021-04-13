import * as React from "react"
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

import * as styles from "../styles/contact.module.css"
import SEO from "../components/seo"

export default function Contact() {
    const { t } = useTranslation();
    return(
        <div>
            <SEO 
                title={t("contact:pageTitle", "Contact")} 
                description="I'm Willma, a full stack web developer. Contact me now to find out how I can help you with you projects!" 
                keywords={["Willma", "Developer", "Contact"]}
                lang="en"
            />
            <Layout pageTitle={t("contact:pageTitle", "Contact")}>
                <div className={styles.contentContainer}>
                    <div className={styles.descriptionContainer}>
                        <h2>{t("contact:description.header", "Hire Me")}</h2>
                        <p>{t("contact:description.description", "Contact me directly to find out how I can help you with your projects. I look forward to hearing from you :)")}</p>
                    </div>
                    <div className={styles.socialsContainer}>
                        <h2>{t("contact:socials.header", "Follow My Socials")}</h2>
                        <div className={styles.socialLinkContainer}>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="mailto:contact@willma.me">
                                <FaEnvelope/>  contact@willma.me
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/willmas-here/">
                                <FaLinkedin/>  willmas-here
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://github.com/willmas-here/">
                                <FaGithub/>  willmas-here
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/willmadev/">
                                <FaInstagram/>  @willmadev
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://t.me/willmas_here/">
                                <FaTelegramPlane/>  @willmas_here
                            </a>
                        </div>
                    </div>
                    <div className={styles.contactForm}>
                        <ContactForm/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {ns: {in: ["contact", "common"]}, language: {eq: $language}}
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