import React from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { IconContext } from "react-icons"
import * as styles from "../styles/footer.module.css"

export default function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socialsContainer}>
                <IconContext.Provider value={{ color: "#FFFFF0", size: "1.25em" }}>
                    <a className={styles.socialsIcon} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/willmas-here/"><FaLinkedin></FaLinkedin></a>
                    <a className={styles.socialsIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/willmas-here/"><FaGithub></FaGithub></a>
                    <a className={styles.socialsIcon} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/willmas_here/"><FaInstagram></FaInstagram></a>
                    <a className={styles.socialsIcon} target="_blank" rel="noopener noreferrer" href="https://t.me/willmas_here"><FaTelegramPlane></FaTelegramPlane></a>
                </IconContext.Provider>
            </div>
            <p className={styles.copyright}>Copyright © 2021 Willma. All Rights Reserved </p>
        </footer>
    )
}