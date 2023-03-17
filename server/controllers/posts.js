import Post from '../models/post';

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ status: 'Error', message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ status: 'Error', message: error.message });
  }
};
