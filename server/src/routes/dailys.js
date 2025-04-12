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
router.get('/:post', (req, res) => {
    const { Daily } = req;
    const allPosts = Daily.find({ posts });

    res.json(allPosts);
})

export default router;