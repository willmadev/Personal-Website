import { Link } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FaBars, FaTimes } from "react-icons/fa";

import * as styles from "../styles/header.module.css";

export default function Header({  }) {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        document.body.style.overflowY = click ? "auto":"hidden";
    }

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
            <nav className={styles.mobileNavMenuContainer}>
                <FaBars className={styles.menuIcon} onClick={handleClick}/>
                <ul className={click ? `${styles.mobileNavMenu} ${styles.active}`: styles.mobileNavMenu}>
                    <FaTimes className={styles.menuCloseIcon} onClick={handleClick}/>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/">Home</Link></li>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/about/">About</Link></li>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/projects/">Projects</Link></li>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/contact/">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}