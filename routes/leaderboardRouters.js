import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import leaderboardSchema from '../schemas/leaderboardSchema.js';

import {
    createRecord,
    getRecords,
    getRecordById,
    updateRecord,
    deleteRecord
} from '../controllers/leaderboardController.js';

const LeaderboardRouter = Router();

LeaderboardRouter.post('/', validateSchema(leaderboardSchema), createRecord);
LeaderboardRouter.get('/', getRecords);
LeaderboardRouter.get('/:id', getRecordById);
LeaderboardRouter.put('/:id', validateSchema(leaderboardSchema), updateRecord);
LeaderboardRouter.delete('/:id', deleteRecord);

export default LeaderboardRouter;