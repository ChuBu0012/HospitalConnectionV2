import { Schema, model, models } from 'mongoose';

const patientSchema = new Schema({
    idcard: {
        type: Number,
        required: true
    },
    prefix: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthday: {
        day: {
            type: Number,
        }, month: {
            type: Number,
        }, year: {
            type: Number,
        }
    },
    address: {
        type: String,
    },
    subdistrict: {
        type: String,
    },
    district: {
        type: String,
    },
    province: {
        type: String,
    },
    zipcode: {
        type: Number
    },
    blood: {
        type: String
    },
    allergic: {
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String
    }
})

const patientModel = models?.patients || model('patients', patientSchema);
export default patientModel;