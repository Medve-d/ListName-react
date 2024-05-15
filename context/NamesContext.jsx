import { createContext, useState } from 'react';

// Créer le context
const NamesContext = createContext();

// Créer le provider
export const NamesProvider = ({ children }) => {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    if (!names.includes(name)) {
      setNames([...names, name]);
    }
  };

  const removeName = (nameToRemove) => {
    setNames(names.filter((name) => name !== nameToRemove));
  };

  return (
    <NamesContext.Provider value={{ names, addName, removeName }}>
      {children}
    </NamesContext.Provider>
  );
};

export default NamesContext;
