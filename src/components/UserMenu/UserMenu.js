import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { Container } from './UserMenu.styled';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <button type="submit" onSubmit={dispatch(logoutUser())}>
        Logout
      </button>
    </Container>
  );
};
