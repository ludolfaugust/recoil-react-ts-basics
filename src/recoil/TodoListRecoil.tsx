import { stringify } from 'querystring';
import React from 'react';
import {useRecoilValue} from 'recoil';
import todoListState from '../atomAndSelector/todoListState';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import { TodoRecoil } from './todoRecoil';

const TodoListRecoil: React.FC = () => {
  const todoListRecoil = useRecoilValue<TodoRecoil[]>(todoListState)
  
  
  return (
    <div>
      <TodoItemCreator />
      {todoListRecoil.map((todoItem) =>(
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoListRecoil