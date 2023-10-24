import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(state => state.profile.isLogin);
  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteAuth = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLogin = useSelector(state => state.profile.isLogin);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
