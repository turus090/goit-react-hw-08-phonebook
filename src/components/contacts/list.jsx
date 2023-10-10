import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsData } from 'redux/slices/contacts';
const List = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.contacts.list);
  console.log(listContacts);
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return <>List</>;
};
export default List;
