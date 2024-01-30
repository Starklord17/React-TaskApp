import { CompleteIcon } from './CompleteIcon';
// import DeleteIcon from '../icons/delete.svg'; 
import { DeleteIcon } from './DeleteIcon';

import PropTypes from 'prop-types';

import './TodoItem.css';

// const DeleteIcon = () => {
//   return (
//     <svg 
//       viewBox="0 0 348.333 348.334" 
//       xmlns="preserve"
//       className="Icon-svg"
//     >
//       <path
//         d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
// 		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
// 		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
// 		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
// 		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
//       />
//     </svg>
//   );
// };

/* function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <img
        src={DeleteIcon}
        alt="Delete Icon"
        onClick={props.onDelete}
      />
    </li>
  );
} */

function TodoItem({ text, done = false, onComplete, onDelete }) {
  return (
    <li className='li-container'>
      <CompleteIcon
        done={done}
        onClick={onComplete}
      />
      <p className={done ? 'todoItem-p--completed' : ''}>{text}</p>
      <DeleteIcon
        onClick={onDelete}
      />
    </li>
  )
}

// Default props
TodoItem.defaultProps = {
  done: false,
};

// Validación de PropTypes
TodoItem.propTypes = {
  done: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { TodoItem };
