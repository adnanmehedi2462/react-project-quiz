import { Navigate, Route,Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function PrivateOutlet({ component: Component, ...rest }) {
  const { currenetUser } = useAuth();

  return currenetUser ? (
    <Outlet {...rest}>{(props) => <Component {...props} />}</Outlet>
  ) : (
    <Navigate to="/login" />
  );
}
