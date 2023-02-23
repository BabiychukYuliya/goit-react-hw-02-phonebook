import PropTypes from 'prop-types';
import { List, Contact } from './Phonebook.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
        </Contact>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};
