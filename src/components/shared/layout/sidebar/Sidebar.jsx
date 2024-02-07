import { Link } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../../constants/DashboardNavigations";

const Sidebar = ({ pathname }) => {
  return (
    <aside
      className="bg-white w-1/5 h-fit flex flex-col gap-4 items-center rounded-tr-3xl rounded-br-3xl"
      style={{
        boxShadow: "2px 0 8px -1px rgb(115,115,115)",
      }}
    >
      <div className="bg-primary w-full h-20 flex justify-center items-center">
        <Link to="/dashboard" className="">
          <img
            src=""
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
                    ? ` side-bar-link bg-neutral-300 text-primary font-extrabold pl-4 `
                    : ` side-bar-link font-medium text-black`
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
