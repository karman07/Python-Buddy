import logo from './logo.svg';
import './App.css';
import Courses from "./Courses/Courses" 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar/Navbar.js';
import './App.css'
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Courses />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
