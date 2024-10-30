import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Users</NavLink>
          {" | "}
          <NavLink to="/qrcode">QR-Code</NavLink>
          {" | "}
          <NavLink to="/scanner">QR-Code Scanner</NavLink>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}
