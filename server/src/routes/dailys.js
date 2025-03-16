import { Router } from 'express';
import { ObjectId } from 'mongodb';
const router = Router();

router.get('/:username', (req, res) => {
    const { user } = req;
    const { username } = req.params;
    const allDailys = Daily.find({ username });

    res.json(allDailys);
})

// TODO: create similar routes for other daily related tasks the frontend will need

export default router;