import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/header.module.css";

export default function Header({  }) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.titleContainer}>
                <Link className={styles.logo} to="/">
                    <StaticImage src="../images/logo_white.png" alt="Logo" placeholder="blurred"/>
                </Link>
                <Link className={styles.title} to="/">Willma</Link>
            </div>
            <nav className={styles.navMenu}>
                <Link className={styles.navItem} to="/">Home</Link>
                <Link className={styles.navItem} to="/about/">About</Link>
                <Link className={styles.navItem} to="/projects/">Projects</Link>
                <Link className={styles.navItem} to="/contact/">Contact</Link>
            </nav>
        </header>
    )
}