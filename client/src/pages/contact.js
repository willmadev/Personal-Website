import * as React from "react"
import { FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

import * as styles from "../styles/contact.module.css"

export default function Contact() {
    return(
        <div>
            <Layout pageTitle="Contact">
                <div className={styles.contentContainer}>
                    <div className={styles.descriptionContainer}>
                        <h2>Hire Me</h2>
                        <p>Contact me directly to find out how I can help you with your projects. I look forward to hearing from you :)</p>
                    </div>
                    <div className={styles.socialsContainer}>
                        <h2>Follow My Socials</h2>
                        <div className={styles.socialLinkContainer}>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/willmas-here/">
                                <FaLinkedin/> @willmas-here
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://github.com/willmas-here/">
                                <FaGithub/> @willmas-here
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/willmas_here/">
                                <FaInstagram/> @willmas_here
                            </a>
                            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://t.me/willmas_here/">
                                <FaTelegramPlane/> @willmas_here
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