import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useState, createContext } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
 });

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Outlet />
        <Footer />
    </ThemeContext.Provider>
  )
}

export default App