import { createContext, useState } from 'react';

// Créer le context
const NamesContext = createContext();

// Créer le provider
export const NamesProvider = ({ children }) => {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  return (
    <NamesContext.Provider value={{ names, addName }}>
      {children}
    </NamesContext.Provider>
  );
};

export default NamesContext;
