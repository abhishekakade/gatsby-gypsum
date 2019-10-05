import React from "react"
import "./Contact.css"
import { Link } from "gatsby"
import { Phone } from "styled-icons/icomoon"
import { Send } from "styled-icons/boxicons-solid"
import {
  Person,
  AlternateEmail,
  ShortText,
  Subject,
} from "styled-icons/material"

const Contact = () => {
  return (
    <section id="contact-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Enquiries</h3>
          <p>
            For any enquiries, questions or commendations, please call us at:
          </p>
          <p
            style={{
              padding: "1rem",
            }}
          >
            <a id="contact-number" href="tel:+91-9004899758">
              <Phone className="phone" />
              +91-9004899758
              {/* <span></span> */}
            </a>
          </p>
          <p>Or fill out this form below and we will get back to you.</p>
          <form
            action="mailto:info@saiindiagypsum.com"
            // action="mailto:abhishekakade@gmail.com"
            method="get"
            encType="text/plain"
          >
            <h3>Contact Us</h3>
            <label>
              <p>
                <Person className="person" size="1rem"></Person>Name
              </p>
              <input type="text" name="name" id="name" required />
            </label>
            <label>
              <p>
                <AlternateEmail
                  className="alternate-email"
                  size="1rem"
                ></AlternateEmail>
                Email
              </p>
              <input type="email" name="email" id="email" required />
            </label>
            <label>
              <p>
                <ShortText className="short-text" size="1rem"></ShortText>
                Subject
              </p>
              <input type="text" name="subject" id="subject" required />
            </label>
            <label>
              <p>
                <Subject className="subject-icon" size="1rem"></Subject>Message
              </p>
              <textarea name="message" id="message" rows="5" />
            </label>
            <button id="submit-btn" type="submit" value="Send">
              Send<Send className="send-icon" size="1rem"></Send>
            </button>
          </form>
        </div>

        <div>
          <h3>Head Office</h3>
          <address></address>
        </div>
      </div>
      <p>h</p>
    </section>
  )
}

export default Contact
