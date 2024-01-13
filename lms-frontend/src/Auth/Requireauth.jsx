import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Requireauth({ allowed }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);

  return isLoggedIn && allowed.find((myrole) => myrole == role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/denied" />
  ) : (
    <Navigate to="login" />
  );
}

export default Requireauth;
