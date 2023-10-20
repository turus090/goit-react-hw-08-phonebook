import { Routes, Route } from 'react-router-dom';

import Contacts from 'page/contacts/Contacts';
import Login from 'page/login/Login ';
import Register from 'page/register/Register';
import RestrictedRoute from './RestrictedRoute';
import Layaout from './layaout';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaout />}>
          <Route
            index
            path="/contacts"
            element={
              <RestrictedRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" index element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
