import { model, Schema } from 'mongoose'

const Sell = new Schema({
    amount: {
        type: Number,
        required: true
    },
    sellDate: {
        type: Date,
        required: true,
        default: false
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
}, {
    timestamps: true
})

const SellModel = model('Sell', Sell)

export { SellModel }