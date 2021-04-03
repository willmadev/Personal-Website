import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaDownload, FaPhoneAlt } from "react-icons/fa"

import Button from "../components/button"
import Layout from "../components/layout"

import resumeFile from "/static/resume.pdf"

import * as styles from "../styles/about.module.css"

export default function About(){
    return(
        <div>
            <Layout pageTitle="About">
                <div className={styles.contentContainer}>
                    <StaticImage className={styles.image} placeholder="blurred" src="../images/headshot.png"/>
                    <h2 className={styles.header}>HI! I'M WILLMA</h2>
                    <p className={styles.description}>
                        I'm a junior at The Webb Schools in California, and I'm based in Hong Kong. Over the years, I have learned a lot about multiple areas, from game development to web development. I am currently learning full stack web development with the MERN stack (which is what this website is built on).
                    </p>
                    <div className={styles.buttons}>
                        <Button>
                            <a href={resumeFile} target="_blank" rel="noreferrer"><FaDownload className={styles.btnIcon}/> See Resume</a>
                        </Button>
                        <Button>
                            <Link to="/contact/"><FaPhoneAlt className={styles.btnIcon}/> Contact Me</Link>
                        </Button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}