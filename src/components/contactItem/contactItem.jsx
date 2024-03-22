import React, { Component } from "react";

class ContactItem extends Component {
  render() {
    const { contact, deleteContact } = this.props;
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.surname}</td>
        <td>{contact.phone}</td>
        <td>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}
export default ContactItem;
