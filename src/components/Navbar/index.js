import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from "../../Auth";

const Nav = () => {
  const History = useNavigate();
  const cartLength = useSelector((state) => state.Cart.cartItems.length);
  const [headerBg, setHeaderBg] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 680) {
      setHeaderBg("black");
    } else {
      setHeaderBg("transparent");
    }
  };
  const location = useLocation();
  const handleButtonClick = (e) => {
    e.preventDefault();
    Auth.signout();
    History("/login");
  };
  return (
    <>
      {location.pathname === "/" ? (
        <header style={{ backgroundColor: headerBg }}>
          <div className={`container`}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to={{ pathname: "/" }}
                className={`navbar-brand ${styles.logo}`}
              >
                E - COM
              </Link>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul className={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li className="nav-item active">
                    <Link className="nav-link" to={{ pathname: "/" }}>
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={{ pathname: "/" }} className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleButtonClick}>
                      Log Out
                    </button>
                  </li>
                  <li className={`nav-item ${styles.navItems}`}>
                    <Link
                      className={`nav-link ${styles.navLink}`}
                      to={{ pathname: "/cart" }}
                    >
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 24 }}
                      ></i>
                      {cartLength ? (
                        <span className={styles.cartCounter}>{cartLength}</span>
                      ) : null}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <header className={styles.headerChange}>
          <div className={`container`}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to={{ pathname: "/" }}
                className={`navbar-brand ${styles.logo}`}
              >
                ECOM
              </Link>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul className={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li className="nav-item active">
                    <Link className="nav-link" to={{ pathname: "/" }}>
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/" }}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleButtonClick}>
                      Log Out
                    </button>
                  </li>
                  <li className={`nav-item ${styles.navItems}`}>
                    <Link
                      className={`nav-link ${styles.navLink}`}
                      to={{ pathname: "/cart" }}
                    >
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 24 }}
                      ></i>
                      {cartLength ? (
                        <span className={styles.cartCounter}>{cartLength}</span>
                      ) : null}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Nav;
