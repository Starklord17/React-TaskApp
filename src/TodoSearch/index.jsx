import React from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';
import { IoMdSearch } from "react-icons/io";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return ( 
    <div className='search-container'>
      <input 
        placeholder="Search" 
        className="TodoSearch" 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <IoMdSearch className='search-icon' alt='search icon'/>
    </div>
  );
}

export { TodoSearch };