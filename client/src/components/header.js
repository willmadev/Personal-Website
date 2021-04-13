import React, { useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { useTranslation, Link, useI18next } from "gatsby-plugin-react-i18next"

import * as styles from "../styles/header.module.css";

export default function Header() {
    const [mobileNavOpen, setMobileNav] = useState(false);
    const [langDropdownOpen, setLangDropdown] = useState(false);

    const langSelectorDropdownRef = useRef(null);
    const mobileNavMenuRef = useRef(null);

    function useOutsideClick(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (ref === mobileNavMenuRef){
                        setMobileNav(false);
                    } else if (ref === langSelectorDropdownRef){
                        setLangDropdown(false);
                    }
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideClick(langSelectorDropdownRef);
    useOutsideClick(mobileNavMenuRef);

    const { t } = useTranslation();
    const {originalPath} = useI18next();

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
                <div ref={langSelectorDropdownRef} className={styles.langSelectorContainer}>
                    <button className={styles.langSelectorButton}
                        aria-label={t("common:labels.languageSelector", "Language Selector")}
                        onClick={() => setLangDropdown(!langDropdownOpen)}
                        >
                            <FaGlobe/>
                    </button>
                    <ul className={langDropdownOpen ? `${styles.langSelectorDropdown} ${styles.active}` : styles.langSelectorDropdown}>
                        <Link to={originalPath} language="en">English</Link>
                        <Link to={originalPath} language="zh">中文</Link>
                    </ul>
                </div>
            </nav>
            <nav ref={mobileNavMenuRef} className={styles.mobileNavMenuContainer}>
                <FaBars className={styles.menuIcon} onClick={() => setMobileNav(true)}/>
                <ul className={mobileNavOpen ? `${styles.mobileNavMenu} ${styles.active}`: styles.mobileNavMenu}>
                    <FaTimes className={styles.menuCloseIcon} onClick={() => setMobileNav(false)}/>
                    <li><Link onClick={() => setMobileNav(false)} to="/">{t("common:links.home", "Home")}</Link></li>
                    <li><Link onClick={() => setMobileNav(false)} to="/about/">{t("common:links.about", "About")}</Link></li>
                    <li><Link onClick={() => setMobileNav(false)} to="/projects/">{t("common:links.projects", "Projects")}</Link></li>
                    <li><Link onClick={() => setMobileNav(false)} to="/contact/">{t("common:links.contact", "Contact")}</Link></li>
                    <div className={styles.mobileNavLangSelector}>
                        <Link to={originalPath} language="en" onClick={() => setMobileNav(false)}>English</Link>
                        <Link to={originalPath} language="zh" onClick={() => setMobileNav(false)}>中文</Link>
                    </div>
                </ul>
            </nav>
        </header>
    )
}