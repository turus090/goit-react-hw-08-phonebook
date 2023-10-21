import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactData, getContactsData } from 'redux/slices/contacts';
import s from './list.module.scss';
import ListItem from './ItemList';
import checkFilter from './checkFilter';
const List = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.contacts.filter);
  let list = [...listContacts];
  if (filter.length > 0) {
    list = listContacts.filter(item => {
      const result = checkFilter(item.name, filter);
      return result && item;
    });
  }
  const handleDeleteContact = id => {
    dispatch(deleteContactData(id));
  };
  const ContactsCollection = list.map(contact => {
    return (
      <ListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        deleteContact={handleDeleteContact}
      />
    );
  });
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return <ul className={s.content}>{ContactsCollection}</ul>;
};
export default List;
