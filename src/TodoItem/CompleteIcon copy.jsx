// import { TodoIcon } from '../TodoIcon';
import PropTypes from 'prop-types';
import { ImRadioChecked, ImRadioUnchecked } from 'react-icons/im';

/* function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
} */

function CompleteIcon({ done = false, onClick }) {
  const iconSelected = done ? <ImRadioChecked /> : <ImRadioUnchecked />;
  return (
    <span
      className={done ? 'span-icon-done' : 'span-icon-uncompleted'}
      onClick={onClick}
    >
      {iconSelected}
    </span>
  );
}

CompleteIcon.defaultProps = {
  done: false,
};

// Validación de PropTypes
CompleteIcon.propTypes = {
  done: PropTypes.bool.isRequired,  // Propiedad 'completed' de tipo booleano, requerida
  onClick: PropTypes.func.isRequired,  // Propiedad 'onComplete' de tipo función, requerida
};

export { CompleteIcon };
