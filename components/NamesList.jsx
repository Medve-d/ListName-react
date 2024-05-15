import { useContext } from 'react';
import NamesContext from '../context/NamesContext';

const NameList = () => {
  const { names, removeName } = useContext(NamesContext);

  return (
    <div className='bouton-supprimer'>
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          {name}
          <button onClick={() => removeName(name)}>Supprimer</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default NameList;
