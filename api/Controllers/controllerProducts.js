const modelProduct = require('../Models/modelProduct');

// Get Products
exports.getAllProducts = async (req, res) => {
  try {
    const response = await modelProduct.find();
    return res.status(200).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error
    });
  }
};

// Add Products
exports.addNewProduct = async (req, res) => {
  try {
    const product = new modelProduct(req.body);
    const { name, description, price, brand } = req.body; 
    if (!name || !description || !price || !brand) {
      return res.status(400).json({
        error: true,
        message: 'Missing data entry.'
      });
    }
    const newProduct = await product.save();
    return res.status(201).json({
      dato: newProduct,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error
    });
  }
};

// Search Products by ID
exports.searchById = async (req, res) => {
  try {
    const response = await modelProduct.findById(req.params._id);
    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'error(404) product not found.'
      });
    }

    return res.status(200).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'error(400) invalid ID.'
    });
  }
};

// Update Products
exports.updateProduct= async (req, res) => {
  let id = req.params._id;
  let update = req.body;
  const response = await modelProduct.findByIdAndUpdate(
    id,
    update,
    (error, preview) => {
      if (error) {
        return res.status(500).json({ message: 'error' });
      }
      return res.status(200).json({ preview, update });
    }
  );
};

// Delete products by ID
exports.deleteProduct= async (req, res) => {
  try {
    const response = await modelProduct.findOneAndRemove({
      _id: req.params.productId
    });
    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'error(404) product not found.'
      });
    }

    return res.status(202).json({
      data: response,
      error: false
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: 'error(400) invalid ID.'
    });
  }
};