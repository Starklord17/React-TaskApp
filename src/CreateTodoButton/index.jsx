import './CreateTodoButton.css';
import PropTypes from 'prop-types';


function CreateTodoButton({setOpenModal}) {
  return(
    <button 
      className="CreateTodoButton"
      onClick={
        // (event) => {
        //   console.log('Le diste click')
        //   console.log(event);
        //   console.log(event.target);
        // }
        () => {
          setOpenModal(state => !state);
        }
      }
      
    >+</button>
  );
}

CreateTodoButton.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};

export { CreateTodoButton };