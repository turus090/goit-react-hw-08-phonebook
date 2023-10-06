import { useSelector, useDispatch } from 'react-redux';
import s from './userMenu.module.scss';
import { logoutData } from 'redux/slices/profile';
const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.profile.token);
  const email = useSelector(state => state.profile.user.email);
  const handleLogOut = () => {
    dispatch(logoutData(token));
  };
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
