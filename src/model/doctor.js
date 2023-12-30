import { Schema, model, models } from 'mongoose';

const doctorSchema = new Schema({
    idcard: {
        type: String,
        required: true,
    },
    doctor_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
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
    age: {
        type: Number,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }
});

const doctorModel = models?.doctors || model('doctors', doctorSchema);
export default doctorModel;