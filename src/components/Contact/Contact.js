import React from "react"
import "./Contact.css"
import { Link } from "gatsby"
const Contact = () => {
  return (
    <section id="contact-section">
      <div className="">
        <h3>Enquiries</h3>
        <p>
          For any inquiries, questions or commendations, please call:
          +919004899758 or fill out the following form.
        </p>
        <form
          action="mailto:info@saiindiagypsum.com"
          method="get"
          enctype="text/plain"
        >
          <h3>Contact Us</h3>
          <label>
            <input placeholder="Your Name" type="text" name="name" id="name" />
          </label>
          <label>
            <input
              placeholder="Your Email ID"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label>
            <input
              placeholder="Subject for Email"
              type="text"
              name="subject"
              id="subject"
            />
          </label>
          <label>
            <textarea
              placeholder="Type your Message"
              name="message"
              id="message"
              rows="5"
            />
          </label>
          <button id="submit-btn" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>

      <div>
        <h3>Head Office</h3>
        <address></address>
      </div>
      <p>h</p>
    </section>
  )
}

export default Contact
