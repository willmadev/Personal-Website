import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next"

import { FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'
import { IconContext } from "react-icons"
import * as styles from "../styles/footer.module.css"

export default function Footer(){
    const { t } = useTranslation();
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socialsContainer}>
                <IconContext.Provider value={{ color: "#FFFFF0", size: "1.25em" }}>
                    <a
                        className={styles.socialsIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("common:labels.email", "Email")}
                        href="mailto:contact@willma.me">
                            <FaEnvelope/>
                    </a>
                    <a
                        className={styles.socialsIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("common:labels.linkedin", "Linkedin")}
                        href="https://www.linkedin.com/in/willmas-here/">
                            <FaLinkedin/>
                    </a>
                    <a
                        className={styles.socialsIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("common:labels.github", "Github")}
                        href="https://github.com/willmas-here/">
                            <FaGithub/>
                    </a>
                    <a
                        className={styles.socialsIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("common:labels.instagram", "Instagram")}
                        href="https://www.instagram.com/willmadev/">
                            <FaInstagram/>
                    </a>
                    <a
                        className={styles.socialsIcon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("common:labels.telegram", "Telegram")}
                        href="https://t.me/willmas_here">
                            <FaTelegramPlane/>
                    </a>
                </IconContext.Provider>
            </div>
            <p className={styles.copyright}>Copyright © 2021 Willma. All Rights Reserved </p>
        </footer>
    )
}