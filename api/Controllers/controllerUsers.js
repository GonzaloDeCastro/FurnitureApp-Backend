const modelUser = require('../Models/modelUser');

// Get Users
exports.getAllUsers = async (req, res) => {
	try {
		const response = await modelUser.find();
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

// Add Users
exports.addNewUser = async (req, res) => {
	try {
		const User = new modelUser(req.body);
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res.status(400).json({
				error: true,
				message: 'Missing data entry.',
			});
		}
		const newUser = await User.save();
		return res.status(201).json({
			dato: newUser,
			error: false,
		});
	} catch (error) {
		return res.status(400).json({
			error: true,
			message: error,
		});
	}
};

// Search Users by ID
exports.searchById = async (req, res) => {
	try {
		const response = await modelUser.findById(req.params._id);
		if (!response || response.length === 0) {
			return res.status(404).json({
				error: true,
				message: 'error(404) User not found.',
			});
		}

		return res.status(200).json({
			data: response,
			error: false,
		});
	} catch (error) {
		return res.status(400).json({
			error: true,
			message: 'error(400) invalid ID.',
		});
	}
};

// Update Users
exports.updateUser = async (req, res) => {
	let id = req.params._id;
	let update = req.body;
	const response = await modelUser.findByIdAndUpdate(id, update, (error, preview) => {
		if (error) {
			return res.status(500).json({ message: 'error' });
		}
		return res.status(200).json({ preview, update });
	});
};

// Delete Users by ID
exports.deleteUser = async (req, res) => {
	try {
		const response = await modelUser.findOneAndRemove({
			_id: req.params.UserId,
		});
		if (!response || response.length === 0) {
			return res.status(404).json({
				error: true,
				message: 'error(404) User not found.',
			});
		}

		return res.status(202).json({
			data: response,
			error: false,
		});
	} catch (error) {
		return res.status(400).json({
			error: true,
			message: 'error(400) invalid ID.',
		});
	}
};
