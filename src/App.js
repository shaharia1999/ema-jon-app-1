
import './App.css';
import Header from './compunant/Header/Header';
import Shop from './compunant/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './compunant/Orders/Orders';
import Inventory from './compunant/Inventory/Inventory';
import Login from './compunant/Login/Login';
import SingUp from './compunant/SingUp/SingUP';
import RequirteAuth from './compunant/Require/RequirteAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order' element={
        <RequirteAuth>
          <Orders></Orders>
        </RequirteAuth>}></Route>
        <Route path='inventory'element={<Inventory></Inventory>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path ='/singup' element={<SingUp/>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
   
    </div>
  );
}

export default App;
