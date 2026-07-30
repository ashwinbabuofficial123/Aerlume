import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
