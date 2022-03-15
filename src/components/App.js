import { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  formSubmitHendler = ({ id, name, number }) => {
    // console.log(data);
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      return {
        contacts: [contact, ...contacts],
      };
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    return (
      <div
        style={{
          width: '600px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 22,
          textTransform: 'uppercase',
          color: 'blue',
          padding: '15px',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHendler} />
        <h2>Contacts : </h2>
        <Filter />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContactList={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
