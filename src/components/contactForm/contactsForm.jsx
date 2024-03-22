import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, phone } = this.state;
    this.props.addContact({ name, surname, phone });
    this.setState({ name: "", surname: "", phone: "" });
  };

  render() {
    const { name, surname, phone } = this.state;
    return (
      <div>
        <h2>Додати новий контакт</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Ім'я"
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={this.handleChange}
              placeholder="Прізвище"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              placeholder="Телефон"
            />
          </div>
          <div>
            <button type="submit">Додати</button>
            <button type="button" onClick={this.props.handleCancel}>
              Скасувати
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default ContactForm;
//
