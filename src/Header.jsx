import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink to="/" style={{ margin: "20px" }}>
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/store" style={{ margin: "20px" }}>
        <h1>Store</h1>
      </NavLink>
    </div>
  );
};

export default Header;
