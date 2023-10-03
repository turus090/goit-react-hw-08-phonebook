import s from './form.module.scss';
const FormItem = props => {
  const handleChange = e => {
    props.handleChange(props.name, e.target.value);
  };
  return (
    <input
      className={s.form_input}
      type={props.typeInput}
      value={props.value}
      placeholder={props.placeholderText}
      onChange={handleChange}
    />
  );
};

export default FormItem;
