import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuLayers, LuUsers, LuShoppingCart, LuLogOut } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "dashboard",
    path: "/dashboard",
    icon: <LuLayers title="dashboard" fontSize={24} />,
  },
  {
    key: "products",
    label: "products",
    path: "/dashboard/products",
    icon: <HiOutlineSquares2X2 title="products" fontSize={24} />,
  },
  {
    key: "customers",
    label: "customers",
    path: "/dashboard/customers",
    icon: <LuUsers title="customers" fontSize={24} />,
  },
  {
    key: "orders",
    label: "orders",
    path: "/dashboard/orders",
    icon: <LuShoppingCart title="orders" fontSize={24} />,
  },
  {
    key: "shipments",
    label: "shipments",
    path: "/dashboard/shipments",
    icon: <MdOutlineLocalShipping title="shipments" fontSize={24} />,
  },
  {
    key: "transactions",
    label: "transactions",
    path: "/dashboard/transactions",
    icon: <CiCreditCard1 title="transactions" fontSize={24} />,
  },
  {
    key: "settings",
    label: "settings",
    path: "/dashboard/settings",
    icon: <IoSettingsOutline title="setting" fontSize={24} />,
  },
  {
    key: "logout",
    label: "logout",
    path: "/",
    icon: <LuLogOut title="logout" fontSize={24} />,
  },
];
