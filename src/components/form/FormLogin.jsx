import { useState } from 'react';
import FormItem from './FormItem';
import s from './form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, signInData } from 'redux/slices/profile';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix';
const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.profile.isLogin);
  const failSign = useSelector(state => state.profile.failSign);
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });
  if (isLogin) {
    navigate('/contacts');
  }
  if (failSign) {
    Notify.failure('Authentication failed');
  }

  const handleChangeInput = (nameParam, value) => {
    if (failSign) {
      dispatch(changeInput());
    }
    setAuthData({
      ...authData,
      [nameParam]: value,
    });
  };
  const handleSubmit = e => {
    const form = e.currentTarget;
    e.preventDefault();

    dispatch(signInData(authData));
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h2 className={s.form_title}>Login</h2>
      <FormItem
        name="email"
        typeInput="text"
        value={authData.email}
        placeholderText="Enter your email address"
        handleChange={handleChangeInput}
      />
      <FormItem
        name="password"
        typeInput="password"
        value={authData.password}
        placeholderText="Enter your password"
        handleChange={handleChangeInput}
      />
      <button type="submit" className={s.form_btn}>
        Sing in
      </button>
    </form>
  );
};

export default FormLogin;
