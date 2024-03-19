import React, { Component } from "react";
// import "./contactList.scss";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ contacts: data });
      });
  }

  deleteContacts(id) {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Contacts</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => this.deleteContacts(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
