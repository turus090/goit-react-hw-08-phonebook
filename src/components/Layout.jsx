import React from 'react';
import Navigation from './navigation/Navigation';
import UserMenu from './userMenu/UserMenu';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navigation />
      <UserMenu />
      <Outlet />
    </>
  );
};

export default Layout;
