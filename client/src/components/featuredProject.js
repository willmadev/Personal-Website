import React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import * as styles from "../styles/featuredProject.module.css"

import Button from "./button"
import { StaticImage } from "gatsby-plugin-image"

export default function FeaturedProject() {
  const { t } = useTranslation();

  return (
        <div className={styles.container}>
            <h2>{t("home:featuredProject.header", "My Latest Project")}</h2>
            <div className={styles.projectContainer}>
                <StaticImage className={styles.image} placeholder="blurred" src="http://placekitten.com/640/360" alt="Placeholder cat image" />
                <h3 className={styles.title}>Project Title</h3>
                <p className={styles.description}>Adipisicing consectetur cillum anim magna. Aute ad ea aliquip do commodo sint.</p>
                <div className={styles.button}>
                    <Button>
                        <Link to="/projects/">{t("common:button.keepReading", "Keep Reading")}</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}