import * as React from "react"
import { withTranslation } from "react-i18next";

import * as styles from "../styles/contactForm.module.css"

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
        .then(() => {
            document.getElementsByClassName(styles.successMessage)[0].innerHTML = "Message Successfully Sent"
            this.setState = {
                name: "",
                email: "",
                subject: "",
                message: ""
            };
        })
        .catch((err) => console.error(err))
        // TODO: send to backend
    }

    render(){
        const { t } = this.props;

        return(
            <div className={styles.formContainer}>
                <h2>{t("contact:form.header", "Contact Form")}</h2>
                <form className={styles.form} name="contact" onSubmit={this.handleSubmit} method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="text" name="name" required placeholder={t("contact:form.name", "Name")} value={this.state.name} onChange={this.handleChange} />
                    <input type="email" name="email" required placeholder={t("contact:form.email", "Email")} value={this.state.email} onChange={this.handleChange} />
                    <input type="text" name="subject" required placeholder={t("contact:form.subject", "Subject")} value={this.state.subject} onChange={this.handleChange} />
                    <textarea name="message" required placeholder={t("contact:form.message", "Message")} value={this.state.message} onChange={this.handleChange} />
                    <input type="submit" name="submit" value={t("common:button.submit", "Submit")} />
                    <p className={styles.successMessage}></p>
                </form>
            </div>
        )
    }
}

export default withTranslation()(ContactForm)