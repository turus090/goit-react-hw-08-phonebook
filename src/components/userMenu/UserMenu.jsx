import { useSelector, useDispatch } from 'react-redux';
import s from './userMenu.module.scss';
import { logoutData } from 'redux/slices/profile';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const UserMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.profile.token);
  const email = useSelector(state => state.profile.user.email);
  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logoutData(token));
  };
  useEffect(() => {
    if (token === null) {
      if (location.pathname === '/contacts') {
        navigate('/login');
      }
    }
  }, [token, navigate, location.pathname]);

  if (token === null) {
    return null;
  }
  return (
    <div className={s.container}>
      <p className={s.container_text}>{email}</p>
      <button onClick={handleLogOut} className={s.container_btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
