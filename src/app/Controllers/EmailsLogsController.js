import LogEmail from '../Entities/LogEmail';

export const index = async (req, res) => {
	const emails = await LogEmail.find();
	
	res.status(200).json(emails)
}