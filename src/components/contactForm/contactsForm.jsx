import React, { Component } from "react";
import "./contactsForm.scss";

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      phone: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
}
