import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"
import Button from "../components/button"
import FeaturedProject from "../components/featuredProject"

import * as styles from "../styles/index.module.css"


export default function Home(props) {
  return (
    <div className={styles.homeContainer}>
      <Header/>
      <div className={styles.main}>
        <div className={styles.landing}>
          <StaticImage className={styles.landingImage} src="../images/home_background.png" placeholder="blurred" />
          <div className={styles.landingContainer}>
            <h1 className={styles.landingTitle}>Willma's Here</h1>
            <p className={styles.landingCaption}>Student | Developer</p>
          </div>
        </div>
        <div className={styles.about}>
          <h2>About Me</h2>
          <p>Hi! I'm Willma. I'm a junior at The Webb Schools in California, and I'm based in Hong Kong. 
            Over the years, I have learned a lot about multiple areas, from game development to web 
            development. I am currently learning React and Gatsby, as well as Node JS.</p>
          <Button><Link to="/about/">Learn More</Link></Button>
        </div>
        <hr />
        <FeaturedProject/>
      </div>
      <Footer/>
    </div>
  )
}