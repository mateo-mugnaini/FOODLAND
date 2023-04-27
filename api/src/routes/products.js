import express from "express";
import Product from "../models/product.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();

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
    const {
      name,
      slug,
      image,
      price,
      category,
      brand,
      stock,
      rating,
      numReviews,
      description,
    } = req.body;
    const newProduct = new Product({
      name,
      slug,
      image:
        image ??
        "https://thumbs.dreamstime.com/z/concepto-creativo-de-la-comida-abstracta-con-la-col-y-el-pe-40423196.jpg",
      price,
      category,
      brand,
      stock,
      rating: rating ?? 0,
      numReviews: numReviews ?? 0,
      description,
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
    const {
      name,
      slug,
      price,
      image,
      images,
      category,
      brand,
      stock,
      description,
      rating,
      numReviews,
    } = req.body;
    const product = await Product.findById(id);
    if (product) {
      product.name = name ?? product.name;
      product.slug = slug ?? product.slug;
      product.price = price ?? product.price;
      product.image = image ?? product.image;
      product.images = images ?? product.images;
      product.category = category ?? product.category;
      product.brand = brand ?? product.brand;
      product.stock = stock ?? product.stock;
      product.description = description ?? product.description;
      product.rating = rating ?? product.rating;
      product.numReviews = numReviews ?? product.numReviews;
      await product.save();
      res.send({ message: "Product Updated" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.get(
  "/slug/:id",
  expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return next({ status: 404, message: "No se encontro el item" });
    }
    res.send(product);
  })
);

export default productRouter;
