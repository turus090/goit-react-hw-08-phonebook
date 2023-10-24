import { Link } from 'react-router-dom';
import s from './navigation.module.scss';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const token = useSelector(state => state.profile.token);
  let navData = [
    {
      text: 'Contacts',
      link: '/contacts',
      mustToken: true,
    },
    {
      text: 'Login',
      link: '/login',
      mustToken: false,
    },
    {
      text: 'Register',
      link: '/register',
      mustToken: false,
    },
  ];
  if (token !== null) {
    navData = navData.filter(el => el.mustToken);
  } else {
    navData = navData.filter(el => !el.mustToken);
  }

  const LinkCollection = () => {
    return navData.map(el => (
      <li key={el.text} className={s.nav_list_item}>
        <Link className={s.nav_list_item_link} to={el.link}>
          {el.text}
        </Link>
      </li>
    ));
  };
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <LinkCollection />
      </ul>
    </nav>
  );
};

export default Navigation;
