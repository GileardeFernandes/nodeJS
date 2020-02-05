const express  = require('express');
const mongoose  = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
require('dotenv/config').load;

const app = express();


mongoose.connect('mongodb+srv://micaelfernandes:micaelfernandes@bdestudos-k8myy.mongodb.net/nodeestudos?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology :true,
});

app.use(cors());
app.use(express.json());
app.use( '/files', express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes);

console.log(process.env.IP_SERVIDOR);

app.listen(3333);

