const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	jwt.verify(
		token,
		process.env.JWT_SECRET || "shhhh",
		(error, decodedToken) => {
			if (error) {
				console.log(error);
				res.status(401).json({ message: "Not Authorized" });
			} else {
				req.decodedToken = decodedToken;

				next();
			}
		}
	);
};
