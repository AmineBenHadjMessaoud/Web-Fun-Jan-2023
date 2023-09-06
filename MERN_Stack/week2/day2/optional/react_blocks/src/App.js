import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import SubContent from './components/SubContent'
import Advertisement from './components/Advertisement'
function App() {
  return (
    <div className='container'>
      <div className="App">
        <Header/>
        <div className='flex'>
          <div className='flex-2'>
            <Navbar/>
          </div>
          <div className='flex-1'>
            <Main SubContent={<SubContent/>} Advertisement={<Advertisement/>}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
