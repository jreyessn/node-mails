import { validateIDMongo } from '../Middlewares/CommonValidations';

export const ValidationRequest = (req, res, next) => {

    const { body } = req;
    let errors = [];

    if(!body.name)
        errors.push({
            message: "El nombre es obligatorio"
        })

    if(!body.email)
        errors.push({
            message: "El email es obligatorio"
        })

    if(errors.length > 0)
        return res.status(400).json(errors);
        
	next();
}

export const validateEmails = (req, res, next) => {
    
    const { selectedIds } = req.body;

    selectedIds.forEach(id => {

        validateIDMongo(id, res);

    })

    next();
}