const express = require('express');
const graphlqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const app = express();

dotenv.config();

//connect to db
mongoose.connect( process.env.DB_CONNECT,
	{useNewUrlParser: true,
		useUnifiedTopology: true},
	 () => {
	console.log('connected to mongo atlas')
});


app.use('/graphql', graphlqlHTTP({
	schema,
	graphiql:true
}));

app.listen(3000, () => {
	console.log('server running on port 3000');
});