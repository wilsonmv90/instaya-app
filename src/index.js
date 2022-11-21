import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Login } from './Componentes/Login';
import { Register } from './Componentes/Register';
import { OrderList } from './Componentes/OrderList';
import { OrderRegister } from './Componentes/OrderRegister';
import { OrderUpdate } from './Componentes/OrderUpdate';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route exact path='/' element={<App />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/register' element={<Register />}/>
        <Route path="/listapedidos" element={<OrderList />}/>
        <Route path="/RegistroPedidos" element={<OrderRegister />}/>
        <Route path="/actualizacionPedidos" element={<OrderUpdate />}/>
       
      </Routes>
    </Router>
    
  </React.StrictMode>
);


