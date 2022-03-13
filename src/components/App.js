import { Component } from 'react';
import Form from './Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmitHendler = data => {
    console.log(data);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
