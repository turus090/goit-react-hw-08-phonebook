import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';

import FormItem from './FormItem';

import s from './form.module.scss';
import { signUpData } from 'redux/slices/profile';

const FormRegister = () => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
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
      dispatch(
        signUpData({
          name: authData.name,
          password: authData.password,
          email: authData.email,
        })
      );
    } else {
      Notify.warning('Please enter same password and repassword');
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2 className={s.form_title}>Login</h2>
      <FormItem
        name="name"
        typeInput="text"
        value={authData.name}
        placeholderText="Enter your name"
        handleChange={handleChangeInput}
      />
      <FormItem
        name="email"
        typeInput="text"
        value={authData.email}
        placeholderText="Enter your email"
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
