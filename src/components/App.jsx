import { Routes, Route } from 'react-router-dom';

import Contacts from 'page/contacts/Contacts';
import Login from 'page/login/Login ';
import Register from 'page/register/Register';
import Navigation from './navigation/Navigation';
import UserMenu from './userMenu/UserMenu';
import RestrictedRoute from './RestrictedRoute';
const App = () => {
  return (
    <>
      <Navigation />
      <UserMenu />
      <Routes>
        <Route
          path="/contacts"
          element={
            <RestrictedRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" index element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
