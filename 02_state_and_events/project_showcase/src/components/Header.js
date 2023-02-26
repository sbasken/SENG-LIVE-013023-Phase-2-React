import React, { useState } from "react";

function Header() {

  const [ isDarkMode, setIsDarkMode ] = useState(true)

  const handleToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode )
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleToggleDarkMode}>{ isDarkMode ? "Dark Mode" : "Light Mode" }</button>
      </nav>
    </header>
  );
}

export default Header;
