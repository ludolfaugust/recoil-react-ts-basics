import {atom} from 'recoil';
import { TodoRecoil } from '../recoil/todoRecoil';



const todoListState = atom({
    key: 'todoListState',
    default: [] as TodoRecoil[],
});

export default todoListState