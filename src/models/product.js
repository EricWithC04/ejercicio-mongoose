import { model, Schema } from 'mongoose'

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const ProductModel = model('Product', Product)

export { ProductModel }