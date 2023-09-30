import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('isLoggedIn', isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavList>
          <li>
            <StyledLink to="/register">Register</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
        </NavList>
      )}
    </div>
  );
};
