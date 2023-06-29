import { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = ({ user, setUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setUser(false);
    setOpenMenu(false);
  };
  return (
    <div className="top">
      <div className="topLeft">
        {/* facebook */}
        <img
          className="barIcon"
          src="assets/social-media-icons/facebook.png"
          alt=""
        />
        {/* twitter */}
        <img
          className="barIcon"
          src="assets/social-media-icons/twitter.png"
          alt=""
        />
        {/* linkedIn */}
        <img
          className="barIcon"
          src="assets/social-media-icons/linkedin.png"
          alt=""
        />
        {/* WhatsApp */}
        <img
          className="barIcon"
          src="assets/social-media-icons/whatsapp.png"
          alt=""
        />
      </div>
      {!user && (
        <>
          <div className="top-left-left">
            <h2>Welcome!</h2>
            <h4>Hope you will enjoy the app</h4>
          </div>
        </>
      )}
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
          {user ? (
            <li className="topListItem">
              <Link className="link" to="/write">
                write
              </Link>
            </li>
          ) : (
            <li className="topListItem">write</li>
          )}
          <li className="topListItem" onClick={() => setUser(false)}>
            <Link className="link" to="/login">
              {user && "logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <div className="profile-image-container">
              <img className="profile-image" src="assets/alfred.png" alt="" />
            </div>
            <img className="searchTop" src="assets/icons/search.png" alt="" />
          </>
        ) : (
          <ul className="topList">
            <Link className="link topListItem" to="/login">
              LOGIN
            </Link>
            <Link className="link topListItem" to="/register">
              REGISTER
            </Link>
          </ul>
        )}
      </div>
      <div className="s-screen-menu" onClick={() => setOpenMenu(!openMenu)}>
        <span className={openMenu && "menu-span-top"}></span>
        <span className={openMenu && "menu-span-center"}></span>
        <span className={openMenu && "menu-span-bottom"}></span>
      </div>
      <div className={"s-screen-menu-content " + (openMenu && "activeB")}>
        <ul className="menuList">
          <li className="menuListItem">
            <Link className="link" to="/" onClick={() => setOpenMenu(false)}>
              home
            </Link>
          </li>
          <li className="menuListItem" onClick={() => setOpenMenu(false)}>
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li className="menuListItem" onClick={() => setOpenMenu(false)}>
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
          {user ? (
            <li className="menuListItem" onClick={() => setOpenMenu(false)}>
              <Link className="link" to="/write">
                write
              </Link>
            </li>
          ) : (
            <li className="menuListItem" onClick={() => setOpenMenu(false)}>
              write
            </li>
          )}
          <li className="menuListItem" onClick={handleClick}>
            <Link className="link" to="/login">
              {user && "logout"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
