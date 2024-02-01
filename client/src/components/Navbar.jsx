import { useState } from "react";
import ".//components.css";
import { Folder, Menu, PlusCircle, ShieldOff } from "lucide-react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="container wrapper">
        <h1>Raffle (rifas jsjs)</h1>
        <div className="btn--menu" onClick={() => setOpenMenu(!openMenu)}>
          <Menu size={32} />
        </div>
        <div className={`menu--content ${openMenu && "view"}`}>
          <div className="item">
            <PlusCircle size={20} />
            Crear Tabla
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
