
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import ProductDeatil from './components/ProductDeatil';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
            <Routes>
            <Route element={<Main/>} path="/products/" />
            <Route element={<ProductDeatil/>} path="/products/:id" />
            <Route element={<UpdateProduct/>} path="/products/edit/:id" />
            </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
