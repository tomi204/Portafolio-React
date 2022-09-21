import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import Skills from "./Components/Pages/Skills";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
      <Footer />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
