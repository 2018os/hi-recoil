import { useRecoilValue, selector } from 'recoil';
import { textState } from './atoms/textAtom';

function CharacterCount() {
  const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
      const text = get(textState);
      return text.length;
    }
  });
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
}

export default CharacterCount;
