import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { ThreeDots } from 'react-loader-spinner';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/Home'));
const RegisterPage = lazy(() => import('pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('pages/LoginPage/Login'));
const ContactsPage = lazy(() => import('pages/ContactsPage/Contacts'));
const AddContactPage = lazy(() => import('pages/AddContactPage/AddContact'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="tomato"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route
          path="/addContact"
          element={
            <PrivateRoute component={AddContactPage} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
