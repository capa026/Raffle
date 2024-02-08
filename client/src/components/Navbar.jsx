import { useState } from "react";
import "./components.css";
import { Folder, Menu, PlusCircle, ShieldOff } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="container wrapper">
        <Link
          to="/"
          style={{ color: "inherit", textDecoration: "none" }}
          onClick={() => setOpenMenu(false)}
        >
          <h1>Raffle (rifas jsjs)</h1>
        </Link>
        <div className="btn--menu" onClick={() => setOpenMenu(!openMenu)}>
          <Menu size={32} />
        </div>
        <div className={`menu--content ${openMenu && "view"}`}>
          <Link
            className="item"
            to="/createTables"
            onClick={() => setOpenMenu(false)}
          >
            <PlusCircle size={20} />
            Crear Tabla
          </Link>
          <Link className="item">
            <Folder size={20} />
            Ver Tablas
          </Link>
          <Link className="item">
            <ShieldOff size={20} />
            Coming soon...
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
