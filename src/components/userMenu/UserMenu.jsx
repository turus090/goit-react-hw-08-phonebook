import { useSelector, useDispatch } from 'react-redux';
import s from './userMenu.module.scss';
import { logoutData } from 'redux/slices/profile';
const UserMenu = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.profile.isLogin);
  const email = useSelector(state => state.profile.user.email);
  const handleLogOut = () => {
    dispatch(logoutData());
  };

  if (!isLogin) {
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
