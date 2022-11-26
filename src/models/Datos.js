import { Schema, model } from "mongoose";

const  rola = new Schema({
    title:String,
    description:String,
    done: {
        type: Boolean,
        default: false
    },
});

export default model('rola', rola)