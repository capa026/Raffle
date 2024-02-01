import { useState } from "react";
import ".//components.css";
import { Folder, Menu, PlusCircle, ShieldOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="container wrapper">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h1>Raffle (rifas jsjs)</h1>
        </Link>
        <div className="btn--menu" onClick={() => setOpenMenu(!openMenu)}>
          <Menu size={32} />
        </div>
        <div className={`menu--content ${openMenu && "view"}`}>
          <div className="item">
            <Link
              to="/createTables"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PlusCircle size={20} />
              Crear Tabla
            </Link>
          </div>
          <div className="item">
            <Folder size={20} />
            Ver Tablas
          </div>
          <div className="item">
            <ShieldOff size={20} />
            Coming soon...
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
