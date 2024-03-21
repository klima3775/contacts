import React, { Component } from "react";
// import "./contactList.scss";

class ContactLister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: "",
      surname: "",
      phone: "",
      isFormVisible: false,
    };
  }

  addContact = () => {
    const { name, surname, phone } = this.state;
    const newContact = {
      id: Date.now(),
      name,
      surname,
      phone,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      surname: "",
      phone: "",
      isFormVisible: false,
    }));
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addContact();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleShowForm = () => {
    this.setState({ isFormVisible: true });
  };

  handleCancel = () => {
    this.setState({
      name: "",
      surname: "",
      phone: "",
      isFormVisible: false,
    });
  };

  render() {
    const { contacts, isFormVisible, name, surname, phone } = this.state;

    return (
      <div className="Parent">
        <h1>Contacts</h1>
        {isFormVisible && (
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
                <button type="button" onClick={this.handleCancel}>
                  Скасувати
                </button>
              </div>
            </form>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => this.deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.handleShowForm}>Додати контакт</button>
      </div>
    );
  }
}

export default ContactLister;
