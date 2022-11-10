import React, { useRef, useState } from 'react'
import todoListState from '../../atomAndSelector/todoListState';
import TodoList from './TodoList';
import { Todo } from './todomodal';

interface NewTodoProps {
    onAddToDo: (todoText: string) => void;
    items: {id: string, text: string}[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const [fontSize, setFontSize] = useState(14)

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value; 
        props.onAddToDo(enteredText);
    }

    const deleteHandler = (id: string) => {
        props.setTodos(prevTodos => {
            return prevTodos.filter((todo) => todo.id !== id)}
        )
    }

  return (
    <>
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">TodoText</label>
            <input type='text' id='todo-text' ref={textInputRef} />
            <button type='submit'>Submit</button>
            
        </div>
    </form>
    <TodoList  items={props.items} deleteHandler={deleteHandler} />
    <h1>{fontSize}</h1>
    <button onClick={()=> setFontSize(fontSize + 1)} style={{fontSize}}>Click to enlarge</button>
    </>
  );
}

export default NewTodo