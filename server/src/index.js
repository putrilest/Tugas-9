import express from "express"
import cors from "cors";
import productRouter from "./routes/products.js";

export const app = express();
app.use(cors({origin: "http://localhost:5173"}));

const router=express.Router();
router.use("/products", productRouter);
app.use("/api", router)

app.listen(3000, ()=> console.log("Succes Running Server"));


