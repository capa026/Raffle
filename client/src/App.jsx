import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./components/navbar";
import CreateTables from "./Routes/CreateTables";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createTables" element={<CreateTables />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
