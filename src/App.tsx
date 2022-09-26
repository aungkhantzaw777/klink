import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import AuthContext from './store/slices/auth-context';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={
        authCtx?.isLoggedIn ?
          <Navigate to="/dashboard" replace={true} />
          :
          <Navigate to="/login" replace={true} />

      } />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Home />} />
    </Routes>
  );
}

export default App;
