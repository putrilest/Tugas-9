/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { ThemeContext } from "../App";
import ThemeButton from "./ThemeButton";
import { NavLink } from "react-router-dom";

const Header = () => {
    const {theme} = useContext(ThemeContext);
  
    return (
      <header className={theme === "dark" ? "bg-orange-900 text-white" : "bg-orange-100 text-orange-700"}>
        <div className="mx-0 border-solid border-b-[1px] border-orange-200">
          <div className="flex justify-between text-center py-4 tablet:mx-2 tablet:py-3 mobile:mx-0 mobile:py-2">
              <div className="flex text-3xl font-bold tablet:text-2xl mobile:text-xl">
                  <div className="mobile:py-2 font-lobster pl-4">Lestari's Hijab Store</div>
              </div>
              <nav className="flex flex-row gap-2  tablet:text-base mobile:text-[0.7rem] mobile:gap-0 ">
                  <NavLink to="/"><button className="p-2 rounded-3xl hover:bg-orange-300 mobile:p-1 mobile:mt-2">Home</button></NavLink>
                  <span className="pt-2 mobile:pt-3">|</span>
                  <NavLink to="/products"><button className="p-2 rounded-3xl hover:bg-orange-300 mobile:p-1 mobile:mt-2">Products</button></NavLink>
                  <span className="pt-2 mobile:pt-3">|</span>
                  <NavLink to="/detail"><button className="p-2 rounded-3xl hover:bg-orange-300 mobile:p-1 mobile:mt-2">Detail</button></NavLink>
                  <span className="pt-2 mobile:pt-3">|</span>
                  <button className="p-1 rounded-3xl hover:bg-orange-300 hover:text-white mobile:mt-2"><ThemeButton/></button>
              </nav>
          </div>
        </div>
      </header>
    )
  }

export default Header