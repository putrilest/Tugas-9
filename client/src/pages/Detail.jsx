import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={theme === "dark" ? "bg-orange-900 text-white" : "bg-orange-100 text-orange-700"}>
      <div className="px-32 py-8 flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <img src={product.image} className="w-[800px] h-[700px] object-cover mb-4 rounded-md" />
        <h2 className="text-xl">Detail</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );

};

export default Detail;

