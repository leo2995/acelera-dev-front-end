import './App.css';
import Login from 'src/pages/Login' 
import Patients from 'src/pages/Patients';
import Dashboard from 'src/pages/Dashboard';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';

import { isAuthenticated } from './services/Auth/service';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  children?: ReactNode;
  redirectTo:string;
}

const PrivateRoute = ({ children, redirectTo }:PrivateRouteProps) => {
  return isAuthenticated()? <>{children}</> : <Navigate to={redirectTo}/> ;
}

const App:React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/patients" element={<Patients />}/>
          <Route path="/dashboard" element={<PrivateRoute redirectTo='/'>
            <Dashboard />
          </PrivateRoute>} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
