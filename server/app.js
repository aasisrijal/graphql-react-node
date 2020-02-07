const express = require('express');
const graphlqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')

const app = express();
app.use(cors());
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

app.listen(5000, () => {
	console.log('server running on port 5000');
});