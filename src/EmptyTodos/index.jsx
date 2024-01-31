// import { TodoContext } from "../TodoContext";
import "./EmptyTodos.css";

function EmptyTodos() {
  // const { loading, totalTodos, searchTodos } = React.useContext(TodoContext);

  return (
    <div>
      <p className="empty">Create a new task...</p>
    </div>

    // <div>
    //   {((!loading && totalTodos === 0)) && <p>Crea tu primer Todo</p>}
    //   {((!loading && searchTodos === 0)) && <p>No hay coincidencias</p>}
    // </div>

  // );

  // return ( loading ? 
  //   <p>Create your first task...</p>
  //   :
  //   <p>Create a new task.</p>
);

}

export { EmptyTodos };
