import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { ContactField, Contact, Button, Number } from './ContactList.styled';

export const ContactList = () => {
  const contactList = useSelector(selectContacts);
  const contactFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filtredContact = contactList.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );
  return filtredContact.map(contact => (
    <ContactField key={contact.id}>
      <Contact> {contact.name} : </Contact>
      <>
        <Number>{contact.number}</Number>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          delete
        </Button>
      </>
    </ContactField>
  ));
};
