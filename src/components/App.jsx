import { Component } from 'react';
import ContactList from './Phonebook/Phonebook';
import { Form } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = newContact => {
    newContact.id = nanoid();

    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name);
    
    if (duplicateName) {
      alert(`${newContact.name} is already in contacts.`)
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // Записує в state значення поля фільтрації
  onChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
    // console.log(evt.target.value);
  };

  // Фільтрує та повертає результат фільтру

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }))
}

  render() {
    const filteredResults = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleFormSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList contacts={filteredResults} onDelete={this.deleteContact } />
      </div>
    );
  }
}
