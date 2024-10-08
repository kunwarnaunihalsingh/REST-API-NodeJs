const express= require('express')

const router = express.Router(); 

const mongoose = require('mongoose');

const Product = require('../models/product').default;

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Handling GET request to /products '
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body.name);
     const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price

     });

       product.save().then(result => {
        console.log(result); //promise
       })
       .catch(err=> console.log(err));
    res.status(201).json({
        message:'Handling POST request to /products ',
        createdProduct: product
    });
    
});

router.get('/:productId', (req,res,next) => {
 const id =req.params.productId;
 if (id == 'special') {
    res.status(200).json({
        message: 'You discovered the special ID',
        id: id
    });
 } 
 else {
    res.status(200).json({
        message: 'You passed an ID '
    });
 }
}); 

router.patch('/:productId', (req, res, next) => {
       res.status(200).json({
           message: 'UPDATE ID'
       });
    });

       router.delete('/:productId', (req,res,next) => {
        res.status(200).json({
            message: 'Delete ID'
        });

    });

export default productrouter;