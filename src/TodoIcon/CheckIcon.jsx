import { TodoIcon } from '.'
import PropTypes from "prop-types";

function CheckIcon({ completed, onClick}) {
    
    return (
        <TodoIcon 
            type= "check"
            color={completed ? '#00FF00' : 'gray'}
            completed = {completed}
            onClick={onClick}
        />
    );
}

CheckIcon.propTypes = {
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export { CheckIcon };