import React from 'react';

function useLocalStorage(itemName, initialValue) {
  // Estado inicial del custom hook
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  // console.log(item);

  return {
    item,
    saveItem, 
    loading, 
    error
  };
}

export {useLocalStorage};



// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'CS50x', completed: true },
//   { text: 'Repasar React', completed: false },
//   { text: 'TypeScript', completed: false },
//   { text: 'Node', completed: false },
//   { text: 'Next.js', completed: false },
//   { text: 'Programación', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));