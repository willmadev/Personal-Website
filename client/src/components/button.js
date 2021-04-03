import React from "react";

import * as styles from "../styles/button.module.css"

export default function Button(props) {
    return(
        <button className={styles.button}>
            {props.children}
        </button>
    )
}