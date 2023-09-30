import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return IsLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
