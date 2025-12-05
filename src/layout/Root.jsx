import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "../Components/Sections/ScrollToTop";

const Root = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Root;
