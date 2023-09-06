import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import WordNumber from './components/WordNumber';
import Colored from './components/Colored';
function App() {
  return (
   <BrowserRouter>
     <div className="App">
        <Routes>
          <Route path='/home' element={<Home />}/>

          <Route path='/:word/' element={<WordNumber />}/>
          <Route path='/:wo/:wcolor/:bcolor' element={<Colored />}/>
        </Routes>
     </div>
   </BrowserRouter>
  );
}

export default App;
