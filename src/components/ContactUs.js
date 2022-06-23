import React, { Component } from 'react';
import  '../App.css';

export default class ContactUs extends Component {
  render() {
   
    return (

      
      <div
      id="contactBox"
      style={{
        marginTop: "100px",
        marginBottom: "500px",
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundColor: "#252934",
        zIndex: "0",
      }}
    >
      <div id="contact">
        <h1
          style={{
            textDecoration: "underline",
            marginTop: "80px",
          }}
        >
          CONTACT
        </h1>

        <form
          target="_blank" 
          action="https://formsubmit.co/1a5f7078b20d2f972662ccd4a6e13d1c"
          method="POST"
          
        >
          <input required name="name" type="text" placeholder="Name" style={{width: "300px"}}/>
          <input required name="email" type="email" placeholder="Email" style={{width: "300px"}}/>
          <textarea required name="message" rows="5" placeholder="Your Message" style={{width: "300px"}}/>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you! your message has been received and I will reply to you as soon as possible. Have a nice day :)"
          />
          <input type="hidden" name="_subject" value="Message received" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    );
  }
}