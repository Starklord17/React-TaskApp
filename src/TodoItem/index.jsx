/* import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

import PropTypes from 'prop-types';

import './TodoItem.css';

const TodoItem = (props) => {
  const { text, completed, onToggle, onDelete } = props;

  return (
    <li className="TodoItem">
      <div className={`check-container ${completed && "completed"}`}>
        <CompleteIcon
          className={`check ${completed && "completed"}`}
          onClick={onToggle}
        />
      </div>
      <p className={`todo ${completed && "completed"}`}>{text}</p>
      <div className="closer-container">
        <DeleteIcon className="closer" onClick={onDelete} />
      </div>
    </li>
  );
};

export { TodoItem }; */

import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { CheckIcon } from '../TodoIcon/CheckIcon'
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
  export { TodoItem };