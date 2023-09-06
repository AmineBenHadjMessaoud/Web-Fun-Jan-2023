
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import ProductDeatil from './components/ProductDeatil';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
            <Routes>
            <Route element={<Main/>} path="/products/" />
            <Route element={<ProductDeatil/>} path="/products/:id" />
            </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
