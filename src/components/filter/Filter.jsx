import s from './filter.module.scss';

const Filter = props => {
  return (
    <div className={s.block}>
      <p className={s.text}>Find contacts by name</p>
      <input
        value={props.filter}
        onChange={e => {
          props.changeFilter(e.target.value);
        }}
        className={s.inputFilter}
        placeholder="Entry name"
      />
    </div>
  );
};

export default Filter;
