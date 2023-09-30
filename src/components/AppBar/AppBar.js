import { Navigation } from 'components/Navigation/Navigation';
import { Header, LinkContainer, StyledLink } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <LinkContainer>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </LinkContainer>
        <Navigation />
      </Header>
      <hr />
    </>
  );
};
