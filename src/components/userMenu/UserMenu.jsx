import s from './userMenu.module.scss';
const UserMenu = () => {
  return (
    <div className={s.container}>
      <p className={s.container_text}>mango@mail.com</p>
      <button className={s.container_btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
