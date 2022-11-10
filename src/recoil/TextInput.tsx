import React from 'react';
import {useRecoilState} from 'recoil';
import textState from '../atomAndSelector/atom';
import colorState from '../atomAndSelector/atomColor';

const TextIput: React.FC = () => {

  const [text, setText] = useRecoilState(textState);
  const [color, setColor] = useRecoilState(colorState);

  const onChange = (event: any) => {
    setText(event.target.value);
    setColor(!color);
    console.log(color)
  }

  return (
    <div>
      <input style={{width: '25rem'}}onChange={onChange} value={text} placeholder="start typing and see the magic of recoil happen"/>
      <br />
      <h3>Echo:{text}</h3>
      <h6>{text.length}</h6>
    </div>
  )
}

export default TextIput