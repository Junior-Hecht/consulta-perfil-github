// Importando React (useState, createContext) de react.
import React, { useState, createContext } from 'react';

// Exportando o contexto.
export const context = createContext();

// Exportando o provider.
export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});

    return (
// Renderizando o provider.
        <context.Provider value={{
            userData,
            repos,
            setUserData,
            setRepos,
        }}>
            {props.children}
        </context.Provider>
    );
    
}