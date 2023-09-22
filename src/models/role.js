import { model, Schema } from 'mongoose'

const Role = new Schema({
    role_type: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const RoleModel = model('Role', Role)

export { RoleModel }