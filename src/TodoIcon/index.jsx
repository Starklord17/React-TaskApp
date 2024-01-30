import { MdDeleteForever } from "react-icons/md";
import { BsCheckCircleFill } from 'react-icons/bs';

import './TodoIcon.css';


function TodoIcon({ type, color, completed, onClick }) {
    return (
      <span
        className={`Icon Icon-${type} ${completed ? `Icon-${type}--active` : ''}`}
        onClick={onClick}
      >
        {type === 'check' ? (
          <BsCheckCircleFill className='Icon-svg' fill={color} />
        ) : type === 'delete' ? (
          <MdDeleteForever className='Icon-svg' style={{ color: color }} />
        ) : null}
      </span>
    );
  }
  
  export { TodoIcon };