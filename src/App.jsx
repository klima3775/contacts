// // import React, { Component } from "react";
// // import ContactList from "./components/сontactList/contactList";
// // import ContactsForm from "./components/contactForm/contactsForm";
// // class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       contacts: props.contacts,
// //     };
// //   }
// //   componentDidCatch(prevProps, prevState) {
// //     if (prevProps.contacts !== this.props.contacts) {
// //       this.setState({ contacts: this.props.contacts });
// //     }
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <ContactList />
// //         <ContactsForm />
// //       </div>
// //     );
// //   }
// // }
// // export default App;
// import React, { Component } from "react";
// import ContactList from "./components/сontactList/contactList";
// import ContactsForm from "./components/contactForm/contactsForm";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: [], // Початково дані контактів порожні
//     };
//   }

//   componentDidMount() {
//     // Викликаємо метод fetchContacts для завантаження даних з API після монтування компонента
//     this.fetchContacts();
//   }

//   fetchContacts = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       this.setState({ contacts: data });
//     } catch (error) {
//       console.error("Error fetching contacts:", error);
//     }
//   };

//   render() {
//     return (
//       <div>
//         {/* Передаємо дані контактів через пропси у дочірні компоненти */}
//         <ContactList contacts={this.state.contacts} />
//         <ContactsForm />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [], // Початково список контактів порожній
      isFormVisible: false, // Стан для відображення форми додавання контакту
      newName: "",
      newSurname: "",
      newPhone: "",
    };
  }

  componentDidMount() {
    // Симуляція завантаження списку контактів з сервера
    this.setState({
      contacts: [
        { id: 1, name: "Іван", surname: "Петров", phone: "123-456-7890" },
        { id: 2, name: "Марія", surname: "Іванова", phone: "987-654-3210" },
      ],
    });
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleShowForm = () => {
    this.setState({ isFormVisible: true });
  };

  handleHideForm = () => {
    this.setState({
      isFormVisible: false,
      newName: "",
      newSurname: "",
      newPhone: "",
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newName, newSurname, newPhone } = this.state;
    // Генеруємо новий id для контакту (для демонстрації використовуємо простий метод)
    const newId = Math.floor(Math.random() * 1000) + 1;
    const newContact = {
      id: newId,
      name: newName,
      surname: newSurname,
      phone: newPhone,
    };
    // Додаємо новий контакт до списку контактів
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      newName: "",
      newSurname: "",
      newPhone: "",
      isFormVisible: false, // Сховати форму після збереження контакту
    }));
  };

  render() {
    const { contacts, isFormVisible, newName, newSurname, newPhone } =
      this.state;

    return (
      <div>
        <h1>Контакти</h1>
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Телефон</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => this.handleDelete(contact.id)}>
                    Видалити
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.handleShowForm}>Додати контакт</button>

        {/* Форма для додавання нового контакту */}
        {isFormVisible && (
          <form onSubmit={this.handleSubmit}>
            <h2>Додати новий контакт</h2>
            <div>
              <label>Ім'я:</label>
              <input
                type="text"
                name="newName"
                value={newName}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Прізвище:</label>
              <input
                type="text"
                name="newSurname"
                value={newSurname}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Телефон:</label>
              <input
                type="text"
                name="newPhone"
                value={newPhone}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Зберегти</button>
            <button type="button" onClick={this.handleHideForm}>
              Скасувати
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Contacts;
