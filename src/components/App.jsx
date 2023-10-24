import { Routes, Route } from 'react-router-dom';

import ContactsPage from 'page/contacts/Contacts';
import LoginPage from 'page/login/Login ';
import RegisterPage from 'page/register/Register';
import { RestrictedRoute, RestrictedRouteAuth } from './RestrictedRoute';
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
            <RestrictedRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRouteAuth
              redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRouteAuth
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
