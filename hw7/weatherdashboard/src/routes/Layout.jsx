import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ background: "#333", padding: "10px" }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li key="home-button" style={{ display: "inline" }}>
            <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
