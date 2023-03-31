const modelProvider = require("../Models/modelProvider");

// Get Providers
exports.getAllProviders = async (req, res) => {
  try {
    const response = await modelProvider.find();
    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

//Add Provider
exports.addProvider = async (req, res) => {
  try {
    const provider = new modelProvider(req.body);
    const { company, name } = req.body; //data from POSTMAN
    if (!company || !name) {
      return res.status(400).json({
        error: true,
        message: "Missing data entry",
      });
    }
    const newProvider = await provider.save();
    return res.status(201).json({
      dato: newProvider,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

//Search Providers by ID
exports.searchById = async (req, res) => {
  try {
    const response = await modelProvider.findById({
      _id: req.params.providerId,
    });
    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "error(404) provider not found",
      });
    }
    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "error(400) invalid ID ",
    });
  }
};

//Search Providers by Name
exports.searchByName = async (req, res) => {
  try {
    const response = await modelProvider.find({
      name: req.params.providerName,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "error(404) provider not found",
      });
    }
    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

//Search Providers by Email
exports.searchByEmail = async (req, res) => {
  try {
    const response = await modelProvider.find({
      email: req.params.providerEmail,
    });

    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "error(404) provider not found",
      });
    }
    return res.status(200).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error,
    });
  }
};

//Update Provider
exports.updateProvider = async (req, res) => {
  try {
    const { providerId } = req.params;

    const provider = await modelProvider.findByIdAndUpdate(
      providerId,
      req.body,
      {
        _id: req.params.providerId,
        new: true,
      }
    );
    if (provider) {
      res.json(provider);
    } else {
      res.status(404).json({ errors: ["Resource not found"] });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: ["An internal server error ocurred."] });
  }
};

//Delete Providers by ID
exports.deleteProvider = async (req, res) => {
  try {
    const response = await modelProvider.findOneAndRemove({
      _id: req.params.providerId,
    });
    if (!response || response.length === 0) {
      return res.status(404).json({
        error: true,
        message: "error(404) provider not found",
      });
    }

    return res.status(202).json({
      data: response,
      error: false,
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "error(400) invalid ID",
    });
  }
};
