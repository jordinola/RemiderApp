import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-lvh bg-amber-100">
      <Outlet />
    </div>
  );
};

export default Layout;
