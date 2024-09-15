import express from "express";
import {createProducts} from "../controller/productController.js"
import { getProducts } from "../controller/productController.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the uploads directory
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname;
      cb(null, uniqueSuffix); // Use a unique filename
    },
  });

const upload = multer({ storage: storage });

router.post("/create",upload.single("image"),createProducts);
router.get("/get",getProducts);

export default router;
