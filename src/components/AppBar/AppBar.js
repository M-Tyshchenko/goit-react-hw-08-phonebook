import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Navigation } from 'components/Navigation/Navigation';
import {
  ContactsLinkContainer,
  Header,
  LinkContainer,
  StyledLink,
} from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && (
            <ContactsLinkContainer>
              <StyledLink to="/contacts">Contacts</StyledLink>
              <StyledLink to="/addContact">
                <BsFillPersonPlusFill size={20} />
              </StyledLink>
            </ContactsLinkContainer>
          )}
        </LinkContainer>
        <Navigation />
      </Header>
      <hr />
    </>
  );
};
