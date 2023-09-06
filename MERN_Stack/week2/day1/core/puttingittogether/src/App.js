import './App.css';
import PersonCard from "./components/PersonCard";
function App() {
  return (
    <div className="App">
     <PersonCard 
        firstName={"Doe"} 
        lastName={"Jane"} 
        age={45} 
        color={"Black"} 
     />
     <PersonCard 
        firstName={"Smith"} 
        lastName={"John"} 
        age={88} 
        color={"Brown"} 
     />
     
    </div>
  );
}

export default App;
