import { user } from "../models/index.js";

export function showUserInfo(req, res) {
  res.status(200).json({ data: req.user });
}

export async function upadteUserInfo(req, res) {
  try {
    const userCurrent = await user
      .findByIdAndUpdate(req.user._id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    res.status(200).json({ data: userCurrent });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
}
