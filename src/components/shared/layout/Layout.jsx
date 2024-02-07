import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <section
      id="layout"
      className="w-[100dvw] min-h-[100dvh] flex bg-neutral-100  "
    >
      <Sidebar pathname={pathname} />
      <section className="flex flex-1 flex-col px-4">
        <Header pathname={pathname} />
        <main className="mt-4 py-4">{<Outlet />}</main>
      </section>
    </section>
  );
};

export default Layout;
