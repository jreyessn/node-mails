import { Types } from 'mongoose';

export const validID = async (req, res, next) => {

	validateIDMongo(req.params.id, res);

	next();
}

export const validateIDMongo = (id, res) => {
	
	if(!Types.ObjectId.isValid(id))
		return res.status(404).json([{
			message: "ID Invalida",
			id
        }])
}