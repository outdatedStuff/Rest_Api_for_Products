const Product = require('../models/Product')


// Create
const addProduct = async(req, res) => {
    // let info = {
    //     title: req.body.title,
    //     price: req.body.price,
    //     description: req.body.description,
    //     published: req.body.published ? req.body.published : false
    // }
    try {
        const product = await Product.create(req.body);
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send({ message: "Error" });
    }
}

//Get all

const getAllProducts = async(req, res) => {
    try {
        let products = await Product.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send({ message: 'Eroare' });
    }
}


//Get single

const getSingleProduct = async(req, res) => {
    try {
        let prod = await Product.findOne({
            where: {
                id: req.params.id
            }
        })

        res.status(200).send(prod);

    } catch (err) {
        res.status(500).send({ message: 'Eroare' });
    }
}

//Update
const updateProduct = async(req, res) => {
    try {
        let prod = await Product.update(req.body, { where: { id: req.params.id } });

        res.status(200).send(prod);
    } catch (err) {
        res.status(500).send({ message: 'Eroare' });
    }
}


//Delete by ID
const deleteProductById = async(req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } });
        res.status(200).send({ message: `Product with id: ${req.params.id} has been deleted` });

    } catch (err) {
        res.status(500).send({ message: 'Eroare' });
    }
}

//Delete  All
const deleteall = async(req, res) => {
    try {
        await Product.destroy({ where: {}, truncate: true });
        res.status(200).send({ message: "Table Cleared" });

    } catch (err) {
        res.status(500).send({ message: 'Eroare' });
    }
}

module.exports = {


    addProduct,
    getAllProducts,
    updateProduct,
    getSingleProduct,
    deleteProductById,
    deleteall
};