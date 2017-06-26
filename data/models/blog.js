import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    content: String
  }
);

mongoose.model("Post", PostSchema);
export default mongoose;
