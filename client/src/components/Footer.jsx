import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {
    const {theme} = useContext(ThemeContext);
    return (
        <footer className={theme === "dark" ? "bg-orange-900 text-white" : "bg-orange-100 text-orange-700"}>
            <div className="flex flex-row gap-4 py-4 px-8 bottom-0  border-solid border-t-[1px] border-orange-200 justify-center item-center">
                <div className="font-bold">
                &copy; Copyright 2023 By PutriLestari
                </div>
            </div>
        </footer>
    )
  }
  