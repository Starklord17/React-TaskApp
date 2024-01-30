// import { TodoIcon } from '../TodoIcon';
import PropTypes from 'prop-types';
import {AiOutlineCloseCircle} from 'react-icons/ai';

/* function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  );
} */

function DeleteIcon({onClick}) {
  return (
    <span
      className="span-icon-close"
      onClick={onClick}
    >
      <AiOutlineCloseCircle /> 
    </span>
  )
}

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export { DeleteIcon };
