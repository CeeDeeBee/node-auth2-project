const db = require("../data/dbConfig");

module.exports = {
	getUsers,
	getUser,
	createUser,
};

function getUsers() {
	return db("users");
}

function getUser(filter) {
	return db("users").where(filter).first();
}

function createUser(user) {
	return db("users")
		.insert(user)
		.then(([id]) => getUser({ id }));
}
