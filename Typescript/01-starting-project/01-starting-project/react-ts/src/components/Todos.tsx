import React, { useContext } from "react";
import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (
) => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;


// import React from "react";
// import Todo from "../models/todo";
// import classes from "./Todos.module.css";

// import TodoItem from "./TodoItem";

// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {
//   return (
//     <ul className={classes.todos}>
//       {props.items.map((item) => (
//         <TodoItem
//           key={item.id}
//           text={item.text}
//           onRemoveTodo={props.onRemoveTodo}
//           // onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Todos;
