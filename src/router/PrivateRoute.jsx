import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    const lastpath = `${pathname}${search}`;

    localStorage.setItem("lastpath", lastpath);

    return logged ? children : <Navigate to="/login" />;
};
