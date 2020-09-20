import { Router } from 'express';
import * as EmailsController from '../app/Controllers/EmailsController';
import * as EmailsLogsController from '../app/Controllers/EmailsLogsController';
import { validID } from '../app/Middlewares/CommonValidations'
import * as EmailRequest from '../app/Validators/EmailRequest'

const router = Router();

router.get('/', EmailsController.index);
router.get('/logs', EmailsLogsController.index);
router.get('/:id', validID, EmailsController.show);

router.post('/', [EmailRequest.ValidationRequest], EmailsController.store);
router.post('/send', EmailRequest.validateEmails, EmailsController.sendEmails);

router.put('/:id', [validID, EmailRequest.ValidationRequest], EmailsController.update);
router.delete('/:id', validID, EmailsController.destroy);


export default router;