import express from "express";

const router = express.Router();

import cookieParser from "cookie-parser";

router.use(cookieParser());
router.post("/set-cookie", (req, res) => {
  const { username } = req.body;
  res.cookie("user", username, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.status(200).send({ msg: "cookie created successfully" });
});

router.get("get-cookie", (req, res) => {
  const userCookie = req.cookies.user;
  if (userCookie) {
    res.status(200).send({ msg: user });
  } else {
    res.status(404).send({ msg: "cookie not found" });
  }
});

router.delete("/delete-cookie", (req, res) => {
  res.clearCookie("user");
  res.status(200).send({ msg: "cookie deleted successfully" });
});

export default router;
