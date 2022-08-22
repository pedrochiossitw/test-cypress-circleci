import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import App from './components/App/App';
import HelloWorld from './components/HelloWorld';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path='/' element={ <App /> } />
      <Route path='/hello-world' element={<HelloWorld />} /> 
    </ReactRouterRoutes> 
  )
}

export default Routes;