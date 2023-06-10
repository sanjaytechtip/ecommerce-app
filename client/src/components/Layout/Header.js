import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { authContext } from "../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  //const navigate = useNavigate();
  const { setAuthData, auth } = useContext(authContext);
  //console.log(auth.data.user.name);
  const handleLogout = () => {
    setAuthData(null);
    //navigate("/login");
    toast.success("Logout Successfully.");
    //console.log('dfgdfg')
  };

  //console.log(auth);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <GiShoppingBag />
          Ecommerce App 2023{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            {!auth.data ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart(0)
              </NavLink>
            </li>
            {!auth.data ? (
              ""
            ) : (
              <li className="nav-item">{auth.data.user.name}</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
