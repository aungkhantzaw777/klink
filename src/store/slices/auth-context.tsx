import React, { useState, useEffect, useCallback } from 'react';

type  ContextProps = {
  token: string;
  isLoggedIn: boolean;
  login: (token:string) => void;
  logout: () => void;
}
interface Props {
  children: React.ReactNode;
}

const AuthContext = React.createContext<ContextProps | null>({
  token: '',
  isLoggedIn: false,
  login: (token:string) => {},
  logout: () => {},
});


const retrieveStoredToken = () => {
  const storedToken = sessionStorage.getItem('token');
  return {
    token: storedToken,
  };
};

export const AuthContextProvider :React.FC<Props> = (prop) => {
  const tokenData = retrieveStoredToken();
  
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expirationTime');

    
  }, []);

  const loginHandler = (token:string) => {
    setToken(token);
    sessionStorage.setItem('token', token);
    console.log('logggin', token) 
  };

  

  const contextValue:any = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
       {prop.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;