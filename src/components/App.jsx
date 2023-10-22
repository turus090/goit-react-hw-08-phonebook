import { Routes, Route } from 'react-router-dom';

import ContactsPage from 'page/contacts/Contacts';
import LoginPage from 'page/login/Login ';
import RegisterPage from 'page/register/Register';
import RestrictedRoute from './RestrictedRoute';
import Layaout from './layaout';
import HomePage from 'page/home/HomePage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<ContactsPage />}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
