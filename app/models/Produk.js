const Mongodb = require('../../build/index')
const Schema  = Mongodb.mongoose.Schema
const Produk = new Schema({
    name:{
        type:String,
        required: 'name wajib di isi'
    },
    category:{
        type:String,
        required: 'category is invalid input'
    },
    description:{
        type:String,
        required: 'description is invalid input'
    },
    price:{
        type:Number,
        required: 'price is invalid input'
    },
    image:{
        type:String,
    },
    qty:{
        type: Number,
        required: 'qty is invalid input'
    },
    CreatedAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = new Mongodb.mongoose.model('Produk', Produk)
