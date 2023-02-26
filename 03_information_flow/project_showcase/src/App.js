import React, { useState } from "react";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const appClass = isDarkMode ? "App light" : "App"

  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectContainer />
      
    </div>
  );
};

export default App;
