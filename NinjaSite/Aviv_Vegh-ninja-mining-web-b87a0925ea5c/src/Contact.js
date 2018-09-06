import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div class="container">
        <div class="form-element">
          <input type="text" id="fname" name="firstname" placeholder="שם פרטי ומשפחה" />
        </div>
        <div class="form-element">
          <textarea id="subject" name="subject" placeholder="פנה אלינו בכל שאלה.."></textarea>
        </div>
        <div class="form-element">
          <input type="submit" value="שלח" />
        </div>
      </div>
    );
  }
}

export default Contact;