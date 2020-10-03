require('dotenv').config();

const express = require('express');
const methodOverride=require('method-override');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.use('/users', routes.users);





app.listen(process.env.PORT, () => {
    console.log(`I am listening on  ${process.env.PORT}`);
})


