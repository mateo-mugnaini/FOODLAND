import express from "express";
import Product from "../models/product.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {

  const products = await Product.find()

  res.send({
    products,
  });
});

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    res.send(categories);
  })
);

productRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const newProduct = new Product({
      name: "sample name " + Date.now(),
      slug: "sample-name-" + Date.now(),
      image: "/images/p1.jpg",
      price: 0,
      category: "sample category",
      brand: "sample brand",
      stock: 0,
      rating: 0,
      numReviews: 0,
      description: "sample description",
    });
    const product = await newProduct.save();
    res.send({ message: "Product Created", product });
  })
);

productRouter.put(
  "/customer/:id",
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const modStock = req.body.stock;

    const product = await Product.findById(productId);
    if (product) {
      product.stock = product.stock + modStock;
      await product.save();
      res.send({ message: "Product Stock Updated" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, slug, price, image, images, category, brand, stock, description } = req.body;
    const product = await Product.findById(id);
    if (product) {
      product.name = name;
      product.slug = slug;
      product.price = price;
      product.image = image;
      product.images = images;
      product.category = category;
      product.brand = brand;
      product.stock = stock;
      product.description = description;
      await product.save();
      res.send({ message: "Product Updated" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);



export default productRouter;
