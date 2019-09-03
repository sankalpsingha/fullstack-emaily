const express = require('express');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost:27017/dummyapp', {
	useNewUrlParser: true
});

const app = express();

require('./routes/authRoutes')(app);

// Client ID : 753072730364-nvud28ebqmvjt4flabhqt6s4ch09oa3o.apps.googleusercontent.com
// Client Secret : OJGJmk_c9_RWkWhukZTuv192

app.listen(5000);
