import React from 'react'
import './ContactUs.css'


const ContactUs = () => {
  return (
    <>
      <div id="contact-wrapper">
        <div id="contact-title">
          <div className="contact-title">
            <h1>contact us</h1>
          </div>
          <div className="contact-des">
            <p>Welcome to our Contact Us page! We appreciate your interest in reaching out to us. Whether you have questions, feedback, or inquiries, we are here to assist you. Please find the various ways you can contact</p>
          </div>

        </div>
        <div id="contact-form">
          <div className="signup-inputBox">

          <label htmlFor="email"> enter your name</label>
            <input type="email" placeholder='name' autoComplete='off' />

            <label htmlFor="email"> Email Address</label>
            <input type="email" placeholder='Email address' autoComplete='off' />

            <label htmlFor="textarea">massege</label>
            <textarea type="textarea" placeholder='what can we  help with?' autoComplete='off' id='textArea' />

            
          </div>
          <div className="signup-Footer">
          <button>submit</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs