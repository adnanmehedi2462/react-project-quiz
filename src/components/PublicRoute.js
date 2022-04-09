import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function PublicRoute({ component: Component, ...rest }) {
  const { currenetUser } = useAuth();

  return !currenetUser ? (
    <Outlet {...rest}>{(props) => <Component {...props} />}</Outlet>
  ) : (
    <Navigate to="/" />
  );
}
