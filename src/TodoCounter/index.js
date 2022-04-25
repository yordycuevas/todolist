import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter()  {

  const {totalTodos, completedTodos} = React.useContext(TodoContext);


  return(
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODO</h2>
    
  );
}

export { TodoCounter };
