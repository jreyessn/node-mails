import app from '../config/app';
import EmailRoutes from './emails.routes';
import { Router } from 'express';

const router = Router();

router.use('/emails', EmailRoutes);

export default router;

