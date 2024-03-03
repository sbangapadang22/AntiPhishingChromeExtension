import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import LearnMore from "./components/LearnMore";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/learn" element={<LearnMore/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
