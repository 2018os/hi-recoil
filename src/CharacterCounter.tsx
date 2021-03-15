import CharacterCount from './CharacterCount';
import TextInput from './TextInput';

function CharacterCounter(): JSX.Element {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
