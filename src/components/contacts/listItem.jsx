import s from './list.module.scss';
const ListItem = ({ id, name, number, deleteContact }) => {
  //return null;
  return (
    <li className={s.contactItem} key={id}>
      <div className={s.content}>
        <p>
          {name}:{number}{' '}
        </p>
      </div>
      <button
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;
