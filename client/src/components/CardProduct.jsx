import { Link } from "react-router-dom";

const CardProduct = (val) => {
  return (
      <div className="bg-white w-[220px] rounded-2xl shadow-md p-4 flex flex-col gap-1 justify-center text-center items-center">
        <img src={val.image}  className="w-[90px] h-[80px] object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold">{val.name}</h2>
        <p className="mb-2">{val.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
          })}</p>
        <Link to={`/detail/${val.id}`}>
        <button className="p-2 rounded-3xl bg-orange-400 text-white hover:bg-orange-500">
          See Details
        </button>
        </Link>
      </div>
    );
  };
  
  export default CardProduct;