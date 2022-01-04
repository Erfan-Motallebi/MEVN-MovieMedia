import { Model, model, Schema, SchemaType } from "mongoose";

interface IPostAttr {
  title: string;
  content: string;
  category: string;
  image: string;
}

interface IPostDocument extends Document {
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IPostModel extends Model<IPostDocument> {
  buildPost(attr: IPostAttr): Exclude<IPostDocument, "Date">;
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    category: {
      type: "String",
      default: () => {
        return "Drama";
      },
      minlength: 1,
      maxlength: 5,
      uppercase: true,
    },
    image: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

postSchema.statics.buildPost = async function (
  attr: IPostAttr
): Promise<IPostAttr> {
  return new Post(attr);
};

const Post = model("Post", postSchema);
