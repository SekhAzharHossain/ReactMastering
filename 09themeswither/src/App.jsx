import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import { useEffect } from "react";
import Themebutton from "./components/Themebutton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // How to Chage the theme

  useEffect(() => {
    let themeChanger = document.querySelector("html").classList;
    themeChanger.remove("light", "dark");
    themeChanger.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebutton></Themebutton>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
