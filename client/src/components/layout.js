import React from "react";

import Header from "./header"
import Footer from "./footer"

import * as styles from "../styles/layout.module.css";

export default function Layout(props){
    return(
        <div className={styles.layoutContainer}>
            <Header></Header>
            <h1 className={styles.pageTitle}>{props.pageTitle}</h1>
            <div className={styles.layoutBody}>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}