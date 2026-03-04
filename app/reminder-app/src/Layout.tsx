import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Link to="/">Dashboard</Link>
        <Link to="/reminder">Reminder</Link>
        <Link to="/event">Event</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
