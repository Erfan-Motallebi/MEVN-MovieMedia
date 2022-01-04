import { BadRequestError } from "./../errors/BadRequestError";
import express, { Router, Request, Response } from "express";
import Multer from "multer";
import path from "path/posix";
import PostModel, { IPostDocument } from "../models/post-model";
interface IPostRequest {
  content: string;
  category: string;
  image: string;
  title: string;
}

type PostParamsType = {
  postId: string;
};
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

router.post("/", uploadAPI, async (req: Request, res: Response) => {
  const filename = req.file?.filename as string;
  const postRequest = req.body as IPostRequest;
  postRequest.image = filename;

  if (postRequest["image"]) {
    const post = await PostModel.buildPost(postRequest);
    return res.status(201).json(post);
  }
  throw new BadRequestError();
});

router.get("/", async (req: Request, res: Response) => {
  const posts = (await PostModel.find({})) as IPostDocument[];
  res.status(200).json({ posts });
});

router.get("/:postId", async (req: Request, res: Response) => {
  const { postId } = req.params as PostParamsType;
  const post = await PostModel.findById(postId);
  res.status(302).json({ post });
});

export { router as PostRouteHandler };
