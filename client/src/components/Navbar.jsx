import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1>Raffle (rifas jsjs)</h1>
        <div className="btn--menu">
          <Menu />
        </div>
      </div>
      <div className="menu--content"></div>
    </div>
  );
};
export default Navbar;
