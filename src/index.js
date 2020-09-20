import app from './config/app';
import { startConnection } from './config/database';
require('dotenv').config()

async function main(){

	await startConnection();

	await app.listen(app.get('port'))

	console.log("Puerto", app.get('port'))

} 


main();