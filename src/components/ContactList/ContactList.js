import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, List, ListItem, Marker } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Marker></Marker>
          <p>
            {contact.name}: {contact.number}
          </p>

          <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};
