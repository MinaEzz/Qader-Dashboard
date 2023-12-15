import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../../constants/DashboardNavigations";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const linkClasses =
    "flex items-center py-2 px-3 gap-2 hover:pl-4 transition-all text-base capitalize";
  const { pathname } = useLocation();

  return (
    <aside
      className="bg-white w-1/5 h-full flex flex-col items-center rounded-tr-3xl rounded-br-3xl"
      style={{ boxShadow: "2px 0 8px -1px #888" }}
    >
      <div>
        <Link to="/dashboard" className="">
          <img
            className=""
            src={logo}
            alt="Qader Website Logo"
            draggable={false}
            loading="lazy"
          />
        </Link>
      </div>
      {/* ./logo */}
      <ul className="w-full flex-1 space-y-2 overflow-auto items-center">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          return (
            <li
              className="w-full hover:bg-neutral-300 transition-all last:rounded-br-3xl"
              key={link.key}
            >
              <Link
                to={link.path}
                className={
                  pathname === link.path
                    ? `${linkClasses} bg-neutral-300 text-[#0d6efd] font-extrabold pl-4 `
                    : `${linkClasses} font-medium text-black`
                }
              >
                {link.icon}
                <span> {link.label} </span>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* ./navigation links */}
    </aside>
  );
};

export default Sidebar;
