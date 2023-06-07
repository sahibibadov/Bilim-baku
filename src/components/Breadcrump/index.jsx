import { Link, useLocation } from "react-router-dom";
import "./style.css";
const items = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "labs", path: "/labs" },
  { label: "branches", path: "/branches" },
  { label: "news", path: "/news" },
  { label: "daily", path: "/daily" },
  { label: "contact", path: "/contact" },
];
export const Breadcrumb = () => {
  const location = useLocation();
  let currentLink = "";
  let crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;
      return (
        <Link key={crumb} className="breadcrumb-item" to={currentLink}>
          {crumb}
        </Link>
      );
    });

  return <div className="breadcrumb">{crumbs}</div>;
};
