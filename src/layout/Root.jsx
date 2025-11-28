import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
