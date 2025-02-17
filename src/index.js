const dotenv = require("dotenv");
const { app } = require("./app");
dotenv.config();

// Because we're going to be using Docker to run the server, 
// this PORT bit doesn't actually matter.
// Docker containers have port mapping!
// So we can say that `somePortNumber:5000` and that'll work,
// with `somePortNumber` being whatever we want.
// const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
	console.log("Server running on http://localhost:" + 5000);
});
