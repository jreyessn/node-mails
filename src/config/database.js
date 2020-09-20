import { connect } from 'mongoose';

export async function startConnection(){

	await connect('mongodb://54.215.246.194:27017/jhonpage', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	console.log("Database connected")
}
