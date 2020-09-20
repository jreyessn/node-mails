import { connect } from 'mongoose';

export async function startConnection(){

	await connect(process.env.APP_MONGO_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	console.log("Database connected")
}
