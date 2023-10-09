import propTypes from 'prop-types';
import s from './button.module.scss';
const Button = ({ handleClick, text }) => {
  return (
    <button className={s.button} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string,
};

export default Button;
