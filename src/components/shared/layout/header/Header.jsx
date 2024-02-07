import Searchbar from "./searchbar/Searchbar";
import { Link } from "react-router-dom";
import adminImage from "../../../../assets/images/photo_2023-12-14_18-29-32.jpg";

const Header = ({ pathname }) => {
  let title = "";
  switch (pathname) {
    case "/dashboard":
      title = "dashboard";
      break;
    case "/dashboard/products":
      title = "products";
      break;
    case "/dashboard/customers":
      title = "customers";
      break;
    case "/dashboard/orders":
      title = "orders";
      break;
    default:
      "dashboard";
      break;
  }

  return (
    <header className="py-3">
      <nav className="flex items-center justify-between">
        <h2 className="text-4xl font-bold capitalize text-primary ">{title}</h2>
        <Searchbar />
        <Link to="/dashborad/profile">
          <img
            src={adminImage}
            alt="Admin Profile"
            className="h-10 w-10 rounded-full"
            draggable={false}
            loading="lazy"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
