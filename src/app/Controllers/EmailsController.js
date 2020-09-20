import Email from '../Entities/Email';
import MailSubscription from '../Mail/MailSubscription';

export const index = async (req, res) => {
	const emails = await Email.find();
	
	res.status(200).json(emails)
}

export const store = async (req, res) => {

	const newEmail = new Email(req.body)

	const email = await newEmail.save();

	res.status(201).json(email)
}

export const show = async (req, res) => {

	const item  = await Email.findById(req.params.id);

	return res.status(200).json(item);

}

export const update = async (req, res) => {
	// el new true es para que mongo retorne el item nuevo y no el anterior

	const updatedItem = await Email.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	})

	res.status(201).json(updatedItem)

}

export const destroy = async (req, res) => {

	await Email.findByIdAndDelete(req.params.id);

	res.status(204).json(null)
}

export const sendEmails = async (req, res) => {
	const { selectedIds } = req.body;
	const criteria = selectedIds.length > 0? { _id: { $in: selectedIds } } : null;

	const collectionEmails = await Email.find(criteria)

	collectionEmails.forEach(async itemEmail => {

		await MailSubscription(itemEmail);

	})

	res.status(204).json(null)
}
