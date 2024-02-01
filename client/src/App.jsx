import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
