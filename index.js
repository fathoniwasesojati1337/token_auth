
const build = require('./build/index') 
const Router = require('./router/api') 
require('dotenv').config({path:'./.env'})
require('./databases/database')
build.app.set('views', build.path.join(__dirname, '/resources/views/') )
build.app.set('view engine', 'ejs')
build.app.use(build.express.static(__dirname + '/public'))
build.app.use(build.session({
    secret:'restfull',
    resave:true,
    saveUninitialized:true,
    store: new build.mongostore({
        mongooseConnection: build.mongoose.connection
    })
}))

/*
|--------------------------------------------------------------------------
| Express Urlencode, json, and static, and set any app
|--------------------------------------------------------------------------
|
| Express urlencode is to generate url -> This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
| Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.
| static Express to access static what you can do when join with js folder and css folder in public tree
|
*/

build.app.use(build.flash())
build.app.use(build.express.urlencoded({extended: true}))
build.server.listen(process.env.PORT, ()=>{
    console.log(`listening server ${process.env.PORT}`)
})
build.app.use(Router)