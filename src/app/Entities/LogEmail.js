import { Schema, model } from 'mongoose';

const schema = new Schema({
    accepted: Array,
    rejected: Array,
    envelopeTime: Number,
    messageTime: Number,
    messageSize: Number,
    response: String,
    envelope: {
      from: String,
      to: Array
    },
    messageId: String
},{
	timestamps: true,
	versionKey: false
})


export default model('emails_logs', schema)