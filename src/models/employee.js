import { model, Schema } from 'mongoose'

const Employee = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const EmployeeModel = model('Employee', Employee)

export { EmployeeModel }