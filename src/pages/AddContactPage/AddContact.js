import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container, MainTitle } from './AddContact.styled';

const AddContact = () => {
  return (
    <Container>
      <MainTitle>Add new contact</MainTitle>
      <ContactForm />
    </Container>
  );
};

export default AddContact;
