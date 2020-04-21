const db = require("../data/dbConfig");

module.exports = {
	getUsers,
	getUsersWhere,
	createUser,
};

function getUsers() {
	return db("users");
}

function getUsersWhere(filter) {
	return db("users").where(filter);
}

function createUser(user) {
	return db("users")
		.insert(user)
		.then(([id]) => getUsersWhere({ id }));
}
