import * as React from "react"
import { withTranslation } from "react-i18next";

import Button from "../components/button"

import * as styles from "../styles/contactForm.module.css"

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
        alert('Message submitted');
        console.log("Message Submitted", event, this.state);
        event.preventDefault();
        // TODO: send to backend
    }

    render(){
        const { t } = this.props;

        return(
            <div className={styles.formContainer}>
                <h2>{t("contact:form.header", "Contact Form")}</h2>
                <form className={styles.form} name="contact" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" required placeholder={t("contact:form.name", "Name")} value={this.state.name} onChange={this.handleChange} />
                    <input type="email" name="email" required placeholder={t("contact:form.email", "Email")} value={this.state.email} onChange={this.handleChange} />
                    <input type="text" name="subject" required placeholder={t("contact:form.subject", "Subject")} value={this.state.subject} onChange={this.handleChange} />
                    <textarea name="message" required placeholder={t("contact:form.message", "Message")} value={this.state.message} onChange={this.handleChange} />
                    <input type="submit" name="submit" value={t("common:button.submit", "Submit")} />
                </form>
            </div>
        )
    }
}

export default withTranslation()(ContactForm)