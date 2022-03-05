const modelProvider = require('../Models/modelProvider');

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
		const { company, firstName, lastName } = req.body; //data from POSTMAN
		if (!company || !firstName || !lastName) {
			return res.status(400).json({
				error: true,
				message: 'Missing data entry',
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
				message: 'error(404) provider not found',
			});
		}
		return res.status(200).json({
			data: response,
			error: false,
		});
	} catch (error) {
		return res.status(400).json({
			error: true,
			message: 'error(400) invalid ID ',
		});
	}
};

//Search Providers by Firstname
exports.searchByfirstName = async (req, res) => {
	try {
		const response = await modelProvider.find({
			firstName: req.params.providerFirstName,
		});

		if (!response || response.length === 0) {
			return res.status(404).json({
				error: true,
				message: 'error(404) provider not found',
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

//Search Providers by Lastname
exports.searchBylastName = async (req, res) => {
	try {
		const response = await modelProvider.find({
			lastName: req.params.providerLastName,
		});

		if (!response || response.length === 0) {
			return res.status(404).json({
				error: true,
				message: 'error(404) provider not found',
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
				message: 'error(404) provider not found',
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
	let providerId = req.params._id;
	let update = req.body;
	const response = await modelProvider.findByIdAndUpdate(
		providerId,
		update,
		(error, preview) => {
			if (error) {
				return res.status(500).json({ message: 'error' });
			}
			return res.status(200).json({ preview, update });
		}
	);
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
				message: 'error(404) provider not found',
			});
		}

		return res.status(202).json({
			data: response,
			error: false,
		});
	} catch (error) {
		return res.status(400).json({
			error: true,
			message: 'error(400) invalid ID',
		});
	}
};
