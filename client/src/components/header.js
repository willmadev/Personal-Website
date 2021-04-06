import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

import Button from "./button"

import * as styles from "../styles/header.module.css";

export default function Header({  }) {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        document.body.style.overflowY = click ? "auto":"hidden";
    }
    const { t } = useTranslation();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.titleContainer}>
                <Link className={styles.logo} to="/">
                    <StaticImage src="../images/logo_white.png" alt="Logo" placeholder="blurred"/>
                </Link>
                <Link className={styles.title} to="/">Willma</Link>
            </div>
            <nav className={styles.navMenu}>
                <Link className={styles.navItem} to="/">{t("common:links.home", "Home")}</Link>
                <Link className={styles.navItem} to="/about/">{t("common:links.about", "About")}</Link>
                <Link className={styles.navItem} to="/projects/">{t("common:links.projects", "Projects")}</Link>
                <Link className={styles.navItem} to="/contact/">{t("common:links.contact", "Contact")}</Link>
                <div className={styles.langSelectorDropdown}>
                    <button className={styles.langSelectorButton}><FaGlobe/></button>
                    <a>English</a>
                    <a>中文</a>
                </div>
            </nav>
            <nav className={styles.mobileNavMenuContainer}>
                <FaBars className={styles.menuIcon} onClick={handleClick}/>
                <ul className={click ? `${styles.mobileNavMenu} ${styles.active}`: styles.mobileNavMenu}>
                    <FaTimes className={styles.menuCloseIcon} onClick={handleClick}/>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/">{t("common:header.home", "Home")}</Link></li>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/about/">{t("common:header.about", "About")}</Link></li>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/projects/">{t("common:header.projects", "Projects")}</Link></li>
                    <li><Link className={styles.mobileNavItem} onClick={handleClick} to="/contact/">{t("common:header.contact", "Contact")}</Link></li>
                    <div className={styles.mobileLangSelector}>
                        <Button>English</Button>
                        <Button>中文</Button>
                    </div>
                </ul>
            </nav>
        </header>
    )
}