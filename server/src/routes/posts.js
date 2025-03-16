import { Router } from 'express';
const router = Router();

router.post('/', async (req, res) => {
    // TODO: respond with all the Post for the user
    const { user } = req;
    const { text, ts, likes } = req.body;
    const { insertedId } = await Post.create({ userId: user._id, text, ts, likes });

    res.json({ insertedId })
})

// TODO: create similar routes for other Post related tasks the frontend will need

export default router;