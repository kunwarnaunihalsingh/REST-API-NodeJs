import mongoose from "mongoose";

const orderSchema = Schema({
  _id: Schema.Types.ObjectId,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Order", orderSchema);
