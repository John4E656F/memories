import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tag: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model('PostMessage', postSchema);

export default Post;
