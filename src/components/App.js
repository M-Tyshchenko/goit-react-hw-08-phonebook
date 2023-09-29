import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { Container, MainTitle, Title } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
       <MainTitle>Phonebook</MainTitle>
      <ContactForm />      
      <Title>Contacts</Title>
      <Filter />
           {isLoading && !error && <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="pink"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                wrapperClassName=""
                visible={true}
      />}
      <ContactList />
    </Container>
  );
};
