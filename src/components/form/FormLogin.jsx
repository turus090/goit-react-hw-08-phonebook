import { useEffect, useState } from 'react';
import FormItem from './FormItem';
import s from './form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signInData } from 'redux/slices/profile';
import { useNavigate } from 'react-router-dom';
const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.profile.token);
  console.log(token);
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (token !== null) {
      localStorage.setItem('token', token);
      if (!localStorage.getItem('email')) {
        localStorage.setItem('email', authData.email);
      }
      navigate('/contacts');
    }
  }, [token, navigate, authData.email]);

  const handleChangeInput = (nameParam, value) => {
    setAuthData({
      ...authData,
      [nameParam]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signInData(authData));
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
