const express = require("express");
import { Router } from "express";
const mongoose = require("mongoose");

const Order = require("../models/order");

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders where fecthed ",
  });
});

router.post("/", (req, res, next) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId,
  });
  order
    .save()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });

  res.status(201).json({
    message: "Order created ",
    order: order,
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order Details",
    orderId: req.params.orderId,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Delete ID",
    orderId: req.params.orderId,
  });
});

export default defaultrouter;
