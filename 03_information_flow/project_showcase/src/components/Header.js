

function Header ({ isDarkMode, onToggleDarkMode }) {

  const handleToggleDarkMode = (e) => {
    onToggleDarkMode(isDarkMode => !isDarkMode);
  }
  
  const buttonText = isDarkMode ? "Dark Mode" : "Light Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{buttonText}</button>
    </header>
  );
}

export default Header;
