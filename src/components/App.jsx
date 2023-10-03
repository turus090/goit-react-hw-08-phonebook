import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contacts from 'page/contacts/Contacts';
import Login from 'page/login/Login ';
import Register from 'page/register/Register';
import Navigation from './navigation/Navigation';
import UserMenu from './userMenu/UserMenu';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <UserMenu />
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
