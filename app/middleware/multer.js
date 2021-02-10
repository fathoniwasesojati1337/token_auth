/*
|--------------------------------------------------------------------------
| multer
|--------------------------------------------------------------------------
|
| multer is image file upload and any file like php, etc to given permission access to uplaod around middleware
|
*/

const MulterBuild = require('../../build/index')
const storage = MulterBuild.multer.diskStorage({
    destination:'./public/img/',
    filename: (req, file, callback)=>{
        callback(null, file.fieldname + '-' + Date.now() + MulterBuild.path.extname(file.originalname))
    }
})
const uploadFileImage = MulterBuild.multer({storage: storage}).single('image')
module.exports = {
    uploadFileImage,
}