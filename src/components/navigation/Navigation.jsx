import { Link } from 'react-router-dom';
import s from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.nav_list_item}>
          <Link className={s.nav_list_item_link} to="/contacts">
            Contacts
          </Link>
        </li>
        <li className={s.nav_list_item}>
          <Link className={s.nav_list_item_link} to="/login">
            Login
          </Link>
        </li>
        <li className={s.nav_list_item}>
          <Link className={s.nav_list_item_link} to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
