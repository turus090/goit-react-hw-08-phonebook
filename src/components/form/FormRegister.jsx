import { useState } from 'react';
import { Notify } from 'notiflix';

import FormItem from './FormItem';

import s from './form.module.scss';

const FormRegister = () => {
  const [authData, setAuthData] = useState({
    login: '',
    password: '',
    rePassword: '',
  });
  const handleChangeInput = (nameParam, value) => {
    setAuthData({
      ...authData,
      [nameParam]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (authData.password === authData.rePassword) {
      console.log(authData);
    } else {
      Notify.warning('Please enter same password and repassword');
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
      <FormItem
        name="rePassword"
        typeInput="password"
        value={authData.rePassword}
        placeholderText="Retype your password"
        handleChange={handleChangeInput}
      />
      <button type="submit" className={s.form_btn}>
        Sing up
      </button>
    </form>
  );
};

export default FormRegister;
