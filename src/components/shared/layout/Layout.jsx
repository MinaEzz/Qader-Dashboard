import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section
      id="layout"
      className="w-screen min-h-[100dvh] overflow-hidden flex bg-neutral-100"
    >
      <Sidebar />
      {/* ./sidebar */}
      <div className="flex flex-1 flex-col px-6">
        <Header />
        <main className="mt-4 py-4">{<Outlet />}</main>
      </div>
      {/* ./header and main */}
    </section>
  );
};

export default Layout;
