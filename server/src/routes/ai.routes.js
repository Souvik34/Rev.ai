import {Router} from 'express';
import { getReview } from '../controllers/ai.controllers.js';

const router = Router();
router.route('/get-review').post(getReview);


export default router;