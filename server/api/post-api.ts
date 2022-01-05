import { BadRequestError } from "./../errors/BadRequestError";
import { Request, Response } from "express";
import PostModel, { IPostDocument } from "../models/post-model";
import { unlinkSync } from "fs";
import path from "path/posix";
interface IPostRequest {
  content: string;
  category: string;
  image: string;
  title: string;
  oldImage?: string;
}

type PostParamsType = {
  postId: string;
};

export const bookAPI = {
  createPost: async (req: Request, res: Response) => {
    const filename = req.file?.filename as string;
    const postRequest = req.body as IPostRequest;
    postRequest.image = filename;

    if (postRequest["image"]) {
      const post = await PostModel.buildPost(postRequest);
      return res.status(201).json(post);
    }
    throw new BadRequestError();
  },
  getAllPosts: async (req: Request, res: Response) => {
    const posts = (await PostModel.find({})) as IPostDocument[];
    res.status(200).json({ posts });
  },
  findPostById: async (req: Request, res: Response) => {
    const { postId } = req.params as PostParamsType;
    const post = await PostModel.findById(postId);
    if (!post) {
      throw new BadRequestError();
    }
    res.status(302).json({ post });
  },
  deletePostById: async (req: Request, res: Response) => {
    const { postId } = req.params as PostParamsType;
    const post = await PostModel.findByIdAndRemove(postId);
    if (!post) {
      throw new BadRequestError();
    }
    res.status(302).json({ removeOperation: true, deleted: true });
  },
  updateBookById: async (req: Request, res: Response) => {
    const postRequest = req.body as IPostRequest;
    const { postId } = req.params as PostParamsType;
    const imageFile = req.file;
    let newImage = "";
    if (imageFile) {
      newImage = imageFile.filename;
      try {
        unlinkSync(
          path.join(
            __dirname,
            "../",
            "src",
            "public",
            "images",
            "posts",
            `${req.body.oldImage}`
          )
        );
      } catch (error) {
        throw new BadRequestError();
      }
    } else {
      newImage = req.body.oldImage;
    }

    try {
      postRequest.image = newImage;
      const updatedPost = await PostModel.findByIdAndUpdate(
        postId,
        postRequest,
        { new: true }
      );
      return res.status(200).json({ updatedPost });
    } catch (error) {
      throw new BadRequestError();
    }
  },
};