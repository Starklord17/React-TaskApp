import ReactDOM from "react-dom";
import {useContext} from "react";
import { TodoContext } from "../TodoContext";
import './modal.css';


function Modal({children}) {
  const {setOpenModal} = useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="ModalBackground" onClick={() => setOpenModal(false)}>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
