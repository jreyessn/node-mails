import { Schema, model } from 'mongoose';

const schema = new Schema({
	name: String,
	last_name: String,
	email: String,
},{
	timestamps: true,
	versionKey: false
})


export default model('emails', schema)