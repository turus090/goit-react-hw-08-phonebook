import axios from 'axios';

/*
name John 
email qweer@gmail.com
password  Frew1325g
*/
const baseUrl = (axios.defaults.url = 'https://connections-api.herokuapp.com');

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUpApi = async candidate => {
  const res = await axios.post(`${baseUrl}/users/signup`, candidate);
  setAuthHeader(res.data.token);
  return res.data;
};

export const signInApi = async candidate => {
  const res = await axios.post(`${baseUrl}/users/login`, candidate);
  setAuthHeader(res.data.token);
  return res.data;
};
//common.Authorization = `Bearer ${token}`;
export const signOutApi = async () => {
  setAuthHeader(localStorage.getItem('token'));
  const { data } = await axios.post(`${baseUrl}/users/logout`);
  clearAuthHeader();
  return data;
};

export const getContacts = async () => {
  setAuthHeader(localStorage.getItem('token'));
  const { data } = await axios.get(`${baseUrl}/contacts`);
  return data;
};

export const createContact = async candidate => {
  setAuthHeader(localStorage.getItem('token'));
  const { data } = await axios.post(`${baseUrl}/contacts`, candidate);
  return data;
};

export const deleteContact = async idCandidate => {
  setAuthHeader(localStorage.getItem('token'));
  const { data } = await axios.delete(`${baseUrl}/contacts/${idCandidate}`);
  return data;
};
