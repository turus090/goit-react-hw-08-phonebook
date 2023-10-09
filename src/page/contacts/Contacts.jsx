import Form from 'components/contacts/form/Form';
import List from 'components/contacts/list';
import Filter from 'components/filter/Filter';

const Contacts = () => {
  return (
    <>
      <Form />
      <Filter />
      <List />
    </>
  );
};

export default Contacts;
