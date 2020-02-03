import React, { memo, useState, useEffect } from "react";

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
        {!isSmallScreen && <a href="/">Create</a>}
        {!isSmallScreen && <a href="/">Blogs</a>}
        {!isSmallScreen && <a href="/">Logout</a>}
      
      </nav>
      <nav className='mobile'>
        {isSmallScreen  && <a href="/">Create</a>}
        {isSmallScreen  && <a href="/">Blogs</a>}
        {isSmallScreen && <a href="/">Logout</a>}
      </nav>
     
    </div>
  );
});

export default Header;
