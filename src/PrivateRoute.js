import Auth from "./Auth";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  return Auth.getAuth() ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
};
export default PrivateRoute;
