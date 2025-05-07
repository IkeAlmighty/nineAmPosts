import { Router } from "express";
import Daily from "../models/daily";
import User from "../models/user";
const router = Router();

router.get("/:username", (req, res) => {
  const { username } = req.params;
  const allDailys = Daily.find({ username });

  res.json(allDailys);
});

router.get("/followers/:username/:dateEpochMs", (req, res) => {
  const { username, dateEpochMs } = req.params;

  let date = getMidnight(dateEpochMs);

  let user = findOne({ username }).populate("followers");
  let followers = user.followers;
  followers.forEach((follower) => follower.populate("daily"));
  // TODO: finish
});

router.get("/:username/:dateEpochMs", (req, res) => {
  const { username, dateEpochMs } = req.params;

  // find all dailys
  let date = getMidnight(dateEpochMs);
  const daily = Daily.find({ date: date.getTime(), username });

  if (!daily) {
    res
      .status(404)
      .json({ message: "No Daily found for given username and date" });
  }

  res.json(daily);
});

export default router;
