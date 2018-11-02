// console.log('hello world');
let express = require('express')

let app = express()

let personRoute = require('./routes/person')

//creating a loging middleware which gives log in console
app.use((req,res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

app.use(personRoute)
app.use(express.static('public'))

//handling 404 errors - Resource not found
app.use((re,res,next) => {
    res.status(404).send('We think you are lost');
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has started at ${PORT}`))