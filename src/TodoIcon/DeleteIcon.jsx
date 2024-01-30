import { TodoIcon } from ".";
import PropTypes from "prop-types";

function DeleteIcon({ onClick }) {
  return <TodoIcon type="delete" color="gray" onClick={onClick} />;
}

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { DeleteIcon };
