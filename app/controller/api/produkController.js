/*
|--------------------------------------------------------------------------
| required component from models
|--------------------------------------------------------------------------
|
| this models will be define by require function to given more structure
| and integrating controller to good template structure MVC
|
*/

const buildController = require('../../../build/index')
const produkModels = require('../../models/Produk')

    /**
     * Token a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const token = (req, res)=>{
    const user = {
        name: "tony",
        email: "1337@gmail.com"
    }
    buildController.jwt.sign({user}, 'secret_api', (err, token)=>{
        res.json({
            user: user,
            bearer: token,
            message: "bearer token berhasil dibuat"
        })
    })
}

    /**
     * index a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const index = (req, res)=>{
   buildController.jwt.verify(req.token, 'secret_api', (err, auth)=>{
       if(err){
           res.json({
               message: 'token expire atau salah'
           })
       }else{
        produkModels.find().then((data)=>{
            res.json({
                data,
            })
        })
       }
    })
}

    /**
     * create a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const create = (req, res)=>{
    buildController.jwt.verify(req.token, 'secret_api', (err, auth)=>{
        if(err){
            res.json({
                message: 'token expire atau salah'
            })
        }else{
    const NewProduk = new produkModels({
         name: req.body.name,
         category: req.body.category,
         description: req.body.description,
         price: req.body.price,
         image: req.file.filename,
         qty: req.body.qty
     })
     produkModels.findOne({name: req.body.name}, (err, invalid)=>{
         if (err){
             res.json({
                 error : err
             })
         }
         if(invalid){
             res.json({
                 message: 'produk ini sudah ada',
                 error : 'ganti nama lain produknya beda dari lainya'
             })
         }else{
             NewProduk.save((err, data)=>{
                 if(err) throw err
                res.json({
                    data,
                    message: "data berhasil di tambahkan"
                })
             })
         }
     })
    }
})
}

    /**
     * edit a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const edit = (req, res)=>{
    buildController.jwt.verify(req.token, 'secret_api', (err, auth)=>{
        if(err){
            res.json({
                message: 'token expire atau salah'
            })
        }else{
         produkModels.find({_id:req.params.id}).then((data)=>{
             res.json({
                 data,
             })
         })
        }
     })
}

    /**
     * Update a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const update = (req, res)=>{
    buildController.jwt.verify(req.token, 'secret_api', (err, auth)=>{
        if(err){
            res.json({
                message: 'token expire atau salah'
            })
        }else{
    const UpdateProduk = {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        image: req.file.filename,
        qty: req.body.qty
    }

    produkModels.findByIdAndUpdate({_id:req.params.id}, UpdateProduk, (err, data)=>{
        if(err) throw err
        res.json({
            message: "berhasil update data",
            data
        })
      })
     }
    })
}

    /**
     * Destroy a newly created resource in storage.
     *
     * @req  \this\is\request\from\client\send\to\server
     * @res  \this\is\response\from\Server\send\to\Client
     */

const destroy = (req, res)=>{
    const id = req.params.id
    produkModels.findOne({_id:id}, (err, data)=>{
        if(data == null){
            res.json({
                message: "data tidak ada"
            })
        }else{
            produkModels.findByIdAndRemove(id, (err,data)=>{
                if(err) throw err
                res.json({
                    message: "data berhasil dihapus"
                })
            })
        }
    })
}

    /**
     * Create modules export to giving access to routes \routes\api.js
     *
     * @modExp  \this\is\modules\to\web\routes
     */

module.exports = {
    index,
    update,
    create,
    destroy,
    token,
    edit,
}