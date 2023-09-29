import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const RegisterPage = lazy(() => import('pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('pages/LoginPage/Login'));
const ContactsPage = lazy(() => import('pages/ContactsPage/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
