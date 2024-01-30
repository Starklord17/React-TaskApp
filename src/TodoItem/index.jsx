import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { CheckIcon } from '../TodoIcon/CheckIcon'
import PropTypes from 'prop-types';
import './TodoItem.css'

function TodoItem (props) {

    return(
      <li className="TodoItem">
        <CheckIcon 
            completed={props.completed}
            onClick={props.onComplete}
        />          
        <p 
          className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
          {props.text}
        </p>
        
        <DeleteIcon 
          onClick = {props.onDelete}  
        />
        
        
      </li>
    );
  }

  TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  export { TodoItem };