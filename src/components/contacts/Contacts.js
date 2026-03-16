import React, { useRef } from "react";
import "./Contacts.css";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rnpb69u",
        "template_e9nu4s7",
        form.current,
        "5-cKV-oJ1_KmlB-tw"
      )
      .then(
        () => {
          alert("Message Sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">

      
      <h1 className="contactTitle">
        Let’s build <span>something great.</span>
      </h1>

      <p className="contactSubtitle">
          I’m currently open to full-time roles, freelance projects, and meaningful collaborations.  
  Let’s connect and build scalable, high-quality web applications together.
      </p>

      <div className="contactContainer">

        {/* LEFT FORM */}
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <label>Name</label>
          <input
            type="text"
            name="your_name"
            placeholder="Your Name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="Your Email"
            placeholder="yourmail@email.com"
            required
          />

          <label>Message</label>
          <textarea
            rows="4"
            name="message"
            placeholder="Your message..."
            required
          />

          <button type="submit" className="sendBtn">
            Send Message →
          </button>
        </form>

        {/* RIGHT INFO */}
        <div className="contactInfo">

          <div className="infoCard">
            <h3>Contact Information</h3>

            <p><FaEnvelope /> nathiyamanickam6181@gmail.com</p>
            <p><FaPhone /> +91 6369874271</p>
            <p><FaMapMarkerAlt /> Karur , TamilNadu</p>
          </div>

          <div className="availability">
            <span className="dot"></span>
            <p>Currently Available for new opportunities.</p>
           
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacts;