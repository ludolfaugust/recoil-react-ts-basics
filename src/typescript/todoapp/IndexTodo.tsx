import React, {useState} from 'react'
import NewTodo from './NewTodo'
import { Todo } from './todomodal';
import {Route} from 'react-router-dom';

const IndexTodo: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    const todoAddHandler = (text:string) => {
        setTodos(tralalaTodo =>[...tralalaTodo, {id: Math.random().toString(), text:text}])
    }

  return  <NewTodo onAddToDo={todoAddHandler} items={todos} setTodos={setTodos} />
}

export default IndexTodo