import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(state => state.profile.isLogin);
  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
