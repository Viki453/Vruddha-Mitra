import { Outlet } from "react-router";
import NavBar from "./NavBar";

function MainAppContent() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default MainAppContent;
