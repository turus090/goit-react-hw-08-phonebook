import { Routes, Route } from 'react-router-dom';

import ContactsPage from 'page/contacts/Contacts';
import LoginPage from 'page/login/Login ';
import RegisterPage from 'page/register/Register';
import RestrictedRoute from './RestrictedRoute';
import HomePage from 'page/home/HomePage';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <RestrictedRoute redirectTo="/login" element={<ContactsPage />} />
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
