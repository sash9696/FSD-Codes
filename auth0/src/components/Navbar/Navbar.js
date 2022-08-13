import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar({ showSignInButton, logOut }) {
  const [dark, setDark] = useState(false);

  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  console.log(isAuthenticated);

  console.log(useAuth0());

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      //cleanup

      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const goToSignInPage = () => {
    loginWithRedirect();
  };
  return (
    <div className={`navbar_container ${dark && "navbar_dark"}`}>
      <img
        className="navbar_logo"
        src="data:image/png;base64,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"
        alt="Logo"
      />

      {showSignInButton === false ? (
        ""
      ) : (
        <button onClick={goToSignInPage} className="navbar_button">
          Sign In
        </button>
      )}

      {logOut && (
        <>
          <h4 className="user_name"> {user && `Hi ${user.name}`} </h4>
          <p
            className="navbar_icon"
            onClick={() =>
              logout({
                returnTo: window.location.origin,
              })
            }
          >
            {" "}
            <AccountCircleIcon />
          </p>
        </>
      )}
    </div>
  );
}

export default Navbar;
