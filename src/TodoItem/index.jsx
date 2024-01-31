import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { CheckIcon } from "../TodoIcon/CheckIcon";
import PropTypes from "prop-types";
import "./TodoItem.css";
import soundFileCompleted from './task_completed.mp3'
import soundFileDeleted from './task_deleted.mp3'

function TodoItem(props) {
  const audioCompleted = new Audio(soundFileCompleted);
  const audioDeleted = new Audio(soundFileDeleted);

  function handleComplete() {
    // Función voltea el valor del toDo.completed y reproduce un sonido de completado
    audioCompleted.play();
    props.onComplete();
  }

  function handleDelete() {
    // Función que elimina el ToDo seleccionado y reproduce un sonido de eliminado
    audioDeleted.play();
    props.onDelete(); // 'onDelete' esta definido en el Context, aunque lo mandamos como props en este caso y le cambiamos el nombre, el nombre original es 'deleteToDo'
  }

  return (
    <li className="TodoItem">
      <CheckIcon completed={props.completed} onClick={handleComplete} />
      <p
        className={`TodoItem-p ${
          props.completed ? "TodoItem-p--complete" : ""
        }`}
      >
        {props.text}
      </p>

      <DeleteIcon onClick={handleDelete} />
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
