import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



interface TodoListProps {
  items: {id: string, text: string}[];
  deleteHandler: (id: string) => void;
}


const TodoList: React.FC<TodoListProps> = (props) => {




  return (
    <div>
      {props.items.map(todo => (
        <li key={todo.id} style={{listStyle:"none"}}>
        <span>{todo.text}</span> <Tippy content="This is a Delete Button"><button onClick={props.deleteHandler.bind(null, todo.id)}>Delete</button></Tippy>
        </li>
      ))}
    </div>
  )
}

export default TodoList