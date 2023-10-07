import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsData } from 'redux/slices/contacts';
const List = () => {
  const token = useSelector(state => state.profile.token);
  console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsData(token));
  }, [token]);
  return <>List</>;
};
export default List;
