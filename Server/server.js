import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRouter from './Routes/userRoutes.js';
import blogRouter from './Routes/blogRoutes.js';
import productRouter from './Routes/productRoutes.js'
import paymentRouter from './Routes/paymentRoutes.js'
import { fileURLToPath } from 'url';
import multer from 'multer';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(cors());

dotenv.config();



app.use(bodyParser.json({ limit : '100mb'}));
app.use(bodyParser.urlencoded({extended: true,limit: '100mb'}))

app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') {
    return res.status(413).send('Payload too large. Please reduce the size of the file or content.');
  }
  next(err);
});
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => console.error('Error connecting to MongoDB:', error));

/*  MULTER */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null,  uniqueSuffix + file.originalname);
  }
})

const upload = multer({storage:storage});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/uploads',upload.single('image'),(req,res)=>{
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({imageUrl});
})

mongoose.connect("mongodb://127.0.0.1/MeraBharat").then(()=>{
    console.log("connected to database");
}).catch((e)=>{
    console.log(e)
})
// app.use('/user',userRouter)
// app.use('/blog',)
app.get('/',(req,res)=>{
    res.send("hii");
})

app.use('/user',userRouter)
app.use('/blog',blogRouter)
app.use('/product',productRouter)
app.use('/pay',paymentRouter)
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})
