import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  return (
    <div>
      {isLogin || <Navbar />}
      <Outlet />
      {isLogin || <Footer />}
    </div>
  );
};

export default Main;
