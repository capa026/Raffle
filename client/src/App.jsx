import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
