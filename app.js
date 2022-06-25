const express = require('express')
const config = require('config')
const mongoose =  require('mongoose')
const expresshandlebars = require('express-handlebars')
const homeRoute = require('./routes/home')

const app = express()
const hbs = expresshandlebars.create({defaultLayout:'main',extname:'hbs'})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')
app.use(express.urlencoded({extended:true}))
app.use(homeRoute)

const PORT = config.get('port') || 3000
async function start()
{
    try
    {
        await mongoose.connect(config.get('connectionstring'),{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT,()=>console.log('app server started on port ', PORT))
    }
    catch(e)
    {
        console.log('error',e.message)
        process.exit(1)
    }
}

start()