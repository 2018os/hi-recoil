import React from 'react';
import { useRecoilState } from 'recoil';

import { textState } from './atoms/textAtom';

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}


export default TextInput;