import React, { Component } from "react";
import ContactForm from "../contactForm/contactsForm";
import ContactItem from "../contactItem/contactItem";
import "./contactList.scss";
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isFormVisible: false,
    };
  }

  addContact = (newContact) => {
    newContact.id = Date.now();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      isFormVisible: false,
    }));
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  handleShowForm = () => {
    this.setState({ isFormVisible: true });
  };

  handleCancel = () => {
    this.setState({ isFormVisible: false });
  };

  render() {
    const { contacts, isFormVisible } = this.state;

    return (
      <div className="Parent">
        <h1>Contacts</h1>
        {isFormVisible && (
          <ContactForm
            addContact={this.addContact}
            handleCancel={this.handleCancel}
          />
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
              <ContactItem
                key={contact.id}
                contact={contact}
                deleteContact={this.deleteContact}
              />
            ))}
          </tbody>
        </table>
        <button onClick={this.handleShowForm}>Додати контакт</button>
      </div>
    );
  }
}
export default ContactList;
