import { Router } from 'express';
const router = Router();

router.get('/:userId', (req, res) => {
    const { user } = req;
})

// TODO: create similar routes for other User related tasks the frontend will need

export default router;