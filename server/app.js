const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_STRING, {
	useNewUrlParser : true,
	useUnifiedTopology : true,
});


app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(apiRoutes);
app.listen(process.env.PORT, ()=>{
	console.log(`Listening at port ${process.env.PORT}`);
})

