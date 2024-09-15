import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  id: String,
  customer_id:String,
  name: String,
  address: String,
  PhoneNo: Number,
  email: String,
  Products: [
    {
      product_id: String,
      quantity: Number,
    },
  ],
  OrderDate: {
    type: Date,
    default: Date.now,
  },
  Del_Date: {
    type: Date,
    default: () =>
      Date.now() + Math.floor(Math.random() * 11) * 24 * 60 * 60 * 1000,
  },
});

const Order = mongoose.model("order",orderSchema)
export default Order;
