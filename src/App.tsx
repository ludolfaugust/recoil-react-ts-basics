import {RecoilRoot} from 'recoil';
import './App.css';
import GenericTypes from './typescript/generics/GenericTypes'
import IndexTodo from './typescript/todoapp/IndexTodo';
import CharacterCount from './recoil/CharacterCount';
import TodoListRecoil from './recoil/TodoListRecoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <IndexTodo />
        <GenericTypes />        
        <CharacterCount />
        <TodoListRecoil />
      </RecoilRoot>
     
    </div>
  );
}

export default App;
