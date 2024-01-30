import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import PropTypes from 'prop-types';

const TodoContext = React.createContext();

// TodoProvider personalizado
function TodoProvider({ children }) {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  // Modificación para ignorar tildes, espacios, mayus, etc.
  const normalizeString = (string) => {
    string = string || "";
    string = string.toLowerCase();
    // Normalizar una cadena en su forma canónicamente descompuesta (NFD) y eliminar todos los caracteres diacríticos de la cadena.
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // Eliminar los espacios en blanco del principio y del final de una cadena de texto
    string = string.trim();
    return string;
  };

  const searchedTodos = todos.filter((todo) => {
    let { text: normalizedTodo } = todo;
    normalizedTodo = normalizeString(normalizedTodo);
    let normalizedSearch = normalizeString(searchValue);

    return normalizedTodo.includes(normalizedSearch);
  });
  // --------------------------------------------------------------------

  
  React.useEffect(() => {
    // console.log('Looog 2');
  }, [totalTodos]);

  // console.log('Log 3');

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // Marcar y desmarcar
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {TodoContext, TodoProvider};
