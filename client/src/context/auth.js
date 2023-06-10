import React, { createContext, useState, useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
// we will use loading later


  const setAuthData = (data) => {
    setAuth({data: data});
  };
 // a function that will help us to add the user data in the auth;

 useEffect(() => {
    setAuth({ loading: false, data: JSON.parse(window.localStorage.getItem('auth'))});
  }, []);

  useEffect(() => {
    window.localStorage.setItem('auth', JSON.stringify(auth.data));
  }, [auth.data]);
// 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;