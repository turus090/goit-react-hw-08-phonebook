import { useState } from 'react';
import FormItem from './FormItem';
import s from './form.module.scss';
const FormLogin = () => {
  const [authData, setAuthData] = useState({
    login: '',
    password: '',
  });
  const handleChangeInput = (nameParam, value) => {
    setAuthData({
      ...authData,
      [nameParam]: value,
    });
  };
  return (
    <form className={s.form}>
      <h2 className={s.form_title}>Login</h2>
      <FormItem
        name="login"
        typeInput="text"
        value={authData.login}
        placeholderText="Enter your login"
        handleChange={handleChangeInput}
      />
      <FormItem
        name="password"
        typeInput="password"
        value={authData.password}
        placeholderText="Enter your password"
        handleChange={handleChangeInput}
      />
      <button button className={s.form_btn}>
        Sing in
      </button>
    </form>
  );
};

export default FormLogin;
