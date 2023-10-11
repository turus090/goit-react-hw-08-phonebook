import { changeFilter } from 'redux/slices/contacts';
import s from './filter.module.scss';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.block}>
      <p className={s.text}>Find contacts by name</p>
      <input
        value={filterValue}
        onChange={handleChangeFilter}
        className={s.inputFilter}
        placeholder="Entry name"
      />
    </div>
  );
};

export default Filter;
