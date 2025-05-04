import {Router} from 'express';
import { getResponse } from '../controllers/ai.controllers.js';

const router = Router();
router.route('/get-response').get(getResponse);


export default router;