import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Home(){
  const [products, setProducts] = useState([]);
  const {theme} = useContext(ThemeContext);

  useEffect(()=>{
    fetch("http://localhost:3000/api/products") 
    .then(response => response.json())
    .then(products => setProducts(products));
  }, []);

 return (
  <div className={theme === "dark" ? "bg-orange-900 text-orange-900" : "bg-orange-100 text-orange-900 "}>
    <div className="flex flex-row gap-4 justify-center flex-wrap py-4 px-64">
      {
        products.map((val) => {
          return(
            <CardProduct key={val.id} id={val.id} name={val.name} image={val.image} price={val.price} description={val.description}/>
          )
        })
      }
    </div>
  </div>
 )
}