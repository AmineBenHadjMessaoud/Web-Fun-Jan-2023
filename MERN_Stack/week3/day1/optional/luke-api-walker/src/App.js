import "./App.css";
import Form from "./components/Form";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  return (
   <BrowserRouter>
    <div style={{ margin: "20px" }}>
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planets/>}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;