import express from "express"

const products = [
    {
        id: 1,
        name:"Bella Square",
        image:"https://down-id.img.susercontent.com/file/89331f311f77cda77c8e1a29ddb65eb2",
        price:15000,
        description:"Bella Square , hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 2,
        name:"Pashmina Silk",
        image:"https://down-id.img.susercontent.com/file/04745e95876de397fd3e00196b0c5fbb",
        price:30000,
        description:"Pashmina Silk , hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 3,
        name:"Bergo Hamidah",
        image:"https://media.karousell.com/media/photos/products/2022/2/9/_ori_hamidah_oval__bergo_hamid_1644428364_cba698d7.jpg",
        price:20000,
        description:"Bergo Hamidah , hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 4,
        name:"Paris Premium",
        image:"https://s2.bukalapak.com/img/71031337003/s-463-463/data.jpeg.webp",
        price:17000,
        description:"Paris Premium, hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 5,
        name:"Pashmina Jersey",
        image:"https://down-id.img.susercontent.com/file/id-11134207-7qula-li3s6ad5pva19b",
        price:28000,
        description:"Pashmina Jersey , hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 6,
        name:"Bergo Maryam",
        image:"https://s1.bukalapak.com/img/67814911792/large/data.jpg",
        price:14000,
        description:"Bergo Maryam , hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 7,
        name:"Pashmina Diamond",
        image:"https://s3.bukalapak.com/img/87944871892/large/data.png",
        price:25000,
        description:"Pashmina Diamond, hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
    {
        id: 8,
        name:"Hijab Sport",
        image:"https://id-test-11.slatic.net/p/5b5f194ed2bb76fb14036a518b05a117.jpg",
        price:12000,
        description:"Hijab Sport, hijab paling nyaman dan paling best seller banget karena tekstur dan karakteristik nya yang ga ribet & friendly buat di pake sehari hari..\nNo brand\nBahan : Polycotton\nUkuran:115 x 115\nFinishing : neci\n\n-Kemiripan 80-90% ( pengaruh pencahayaan)\nBahan Lembut dan Mudah dibentuk\nTidak panas & nyaman dipakai"
    },
];

const router = express.Router();

//GET ALL
router.get("/", (_req, res) =>{
    res.json(
        products.map((product) => {
            return {id:product.id, name:product.name, image:product.image, price:product.price}
        })
    );
});

// GET BY ID
router.get("/:id", (req, res) => {
    const product = products.find((p) => p.id == req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      res.send("Planet tidak ditemukan.");
    }
  });

export default router;