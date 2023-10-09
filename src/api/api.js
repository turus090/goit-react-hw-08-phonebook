import axios from 'axios';

/*
name John 
email qweer@gmail.com
password  Frew1325g
*/
const baseURL = 'https://connections-api.herokuapp.com';

export const signUpApi = async candidate => {
  const { data } = await axios.post(`${baseURL}/users/signup`, candidate);
  console.log(data);
  return data;
};

export const signInApi = async candidate => {
  const { data } = await axios.post(`${baseURL}/users/login`, candidate);
  return data;
};
//common.Authorization = `Bearer ${token}`;
export const signOutApi = async token => {
  const { data } = await axios.post(
    `${baseURL}/users/logout`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const getContacts = async token => {
  console.log(token);
  const { data } = await axios.get(
    `https://connections-api.herokuapp.com/contacts`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};
