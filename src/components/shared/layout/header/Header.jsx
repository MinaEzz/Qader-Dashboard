import Searchbar from "./searchbar/Searchbar";
import { Link } from "react-router-dom";
import adminImage from "../../../../assets/images/photo_2023-12-14_18-29-32.jpg";

const Header = () => {
  return (
    <header className="py-3">
      <nav className="flex items-center justify-between">
        <h2 className="text-3xl font-bold capitalize text-[#0d6efd] ">
          overview
        </h2>
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
