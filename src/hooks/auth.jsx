import { createContext, useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  let history = useHistory();

  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@beneficiarios:logged');

    return !!isLogged;
  });

  const signIn = (email, password) => {

    if(email === 'admin@yube.com' && password === '123') {
      localStorage.setItem('@beneficiarios:logged', 'true');
      setLogged(true);
      history.push("/admin");
    } else {
      alert('Senha ou usuário inválidos');
    }
  }

  const signOut = () => {
    localStorage.removeItem('@beneficiarios:logged');
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      { children } 
    </AuthContext.Provider>
  )

}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };