import { Model, model, Schema, Document } from "mongoose";

interface IPostAttr {
  title: string;
  content: string;
  category: string;
  image: string;
}

export interface IPostDocument extends Document {
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IPostModel extends Model<IPostDocument> {
  buildPost(attr: IPostAttr): Promise<IPostDocument>;
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    content: {
      type: Schema.Types.String,
      required: [true, "Content is required."],
    },
    category: {
      type: "String",
      default: () => {
        return "Drama";
      },
      minlength: 1,
      maxlength: 20,
      uppercase: true,
    },
    image: {
      type: Schema.Types.String,
      required: [true, "Please pick an image to upload."],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret: IPostDocument) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

postSchema.statics.buildPost = async function (
  attr: IPostAttr
): Promise<IPostDocument> {
  return await Post.create(attr);
};

const Post = model<IPostDocument, IPostModel>("Post", postSchema);

export default Post;
