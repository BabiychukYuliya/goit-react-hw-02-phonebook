import { Contact } from "./ContactItem.styled";

const ContactItem = ({ contact, onDelete }) => {
        
        
    return ( <Contact>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </Contact>)
}

export default ContactItem;