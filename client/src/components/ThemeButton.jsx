import { useContext } from "react";
import { ThemeContext } from "../App";
import {MdDarkMode} from "react-icons/md";

const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
           <MdDarkMode className="h-5 w-5 mt-1 mobile:pb-2"/>
        </button>
    )
}

export default ThemeButton