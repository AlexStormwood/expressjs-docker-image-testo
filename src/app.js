const express = require('express'), 
app = express(); 
  
app.use(express.urlencoded({ extended: true })) ;
app.use(express.json());

app.get("/", (request, response) => {
	response.json({
		path: request.originalUrl,
		host: request.hostname
	});
});

module.exports = {
	app
}