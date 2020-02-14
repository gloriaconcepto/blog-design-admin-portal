import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
const Header = memo(props => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <div className={"header"}>
      <nav className="Nav">
        {!isSmallScreen && <Link to="/creatblog">Create</Link>}
        {!isSmallScreen && <Link to="/">Blogs</Link>}
        {!isSmallScreen && <Link to="/">Logout</Link>}
      </nav>
      <nav className="mobile">
        {isSmallScreen && <Link to="/creatblog">Create</Link>}
        {isSmallScreen && <Link to="/">Blogs</Link>}
        {isSmallScreen &&  <Link to="/">Logout</Link>}
      </nav>
    </div>
  );
});

export default Header;
