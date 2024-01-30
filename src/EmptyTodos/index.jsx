// import { TodoContext } from "../TodoContext";

function EmptyTodos() {
  // const { loading, totalTodos, searchTodos } = React.useContext(TodoContext);

  return (
    <div>
      <br />
      <p>Create a task.</p>
    </div>

    // <div>
    //   {((!loading && totalTodos === 0)) && <p>Crea tu primer Todo</p>}
    //   {((!loading && searchTodos === 0)) && <p>No hay coincidencias</p>}
    // </div>

  );
}

export { EmptyTodos };


// Posible implementación. Averiguar si habría que implementarla dentro de AppUI.