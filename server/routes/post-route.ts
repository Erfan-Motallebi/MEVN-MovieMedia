import { bookAPI } from "./../api/post-api";
import { BadRequestError } from "./../errors/BadRequestError";
import express, { Router, Request, Response } from "express";
import Multer from "multer";
import path from "path/posix";

const router: Router = express.Router();

const fileStorage = Multer.diskStorage({
  destination(req, file: Express.Multer.File, cb) {
    cb(null, path.join(__dirname, "../", "src", "public", "images", "posts"));
  },
  filename(req, file: Express.Multer.File, callback) {
    callback(null, "image" + "_" + Date.now() + "_" + file.originalname);
  },
});

const uploadAPI = Multer({
  storage: fileStorage,
}).single("image");

router.post("/", uploadAPI, bookAPI.createPost);

router.get("/", bookAPI.getAllPosts);

router.get("/:postId", bookAPI.findPostById);

router.delete("/:postId", bookAPI.deletePostById);

export { router as PostRouteHandler };
