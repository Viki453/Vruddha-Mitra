import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./features/landing/NavBar";
import Footer from "./features/landing/Footer";

function Demo1() {
  const location = useLocation();

  // Show Navbar/Footer only on specific paths
  const showLayoutRoutes = ["/", "/employers", "/features", "/resources"];

  // Check if the current route matches any in `showLayoutRoutes`
  const shouldShowLayout = showLayoutRoutes.some(
    (path) => location.pathname === path
  );

  return (
    <div>
      {shouldShowLayout && <NavBar />}
      <Outlet />
      {shouldShowLayout && <Footer />}
    </div>
  );
}

export default Demo1;
