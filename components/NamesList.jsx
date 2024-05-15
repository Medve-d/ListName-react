import { useContext } from 'react';
import NamesContext from '@/context/NamesContext';

const NamesList = () => {
  const { names } = useContext(NamesContext);

  return (
    <div>
      <h2>List of Names</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
