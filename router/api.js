/* note

    Prepared to Build and get module exports

*/

const buildRoute = require('../build/index')
const Route = buildRoute.express.Router()
const Controller = require('../app/controller/api/produkController')
const VerifyTokenMiddleware = require('../app/middleware/auth0')
const multerFileUploadImage = require('../app/middleware/multer')

/* note

    token Auth Get Bearer

*/

Route.post('/api/auth/token', Controller.token)

//api produk to user
/* note IMPORTANT !!!!!!!!!!!!!!!!

    method PUT 2x click in postman will be updated, 
    
*/

Route.get('/api/produk', VerifyTokenMiddleware.TokenVerifiyBearerJwt, Controller.index)
Route.put('/api/produk/update/:id',VerifyTokenMiddleware.TokenVerifiyBearerJwt, multerFileUploadImage.uploadFileImage, Controller.update)
Route.get('/api/produk/update/:id', VerifyTokenMiddleware.TokenVerifiyBearerJwt, Controller.edit)
Route.post('/api/produk/create',VerifyTokenMiddleware.TokenVerifiyBearerJwt, multerFileUploadImage.uploadFileImage, Controller.create)
Route.delete('/api/produk/delete/:id',VerifyTokenMiddleware.TokenVerifiyBearerJwt, Controller.destroy)

/* note

    method PUT 2x click in postman will be updated, 

*/
module.exports = Route