import {selector} from 'recoil';
import colorState from './atomColor';

const changeColorState = selector({
    
    key: 'changeColorState',
    get:  ({get}) => {
        const color = get(colorState);
        return color;
        
    }
})

export default changeColorState;