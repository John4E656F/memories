import mongoose from 'mongoose';

const userSchema = mongooseSchema({
  name: { trype: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model('User', userSchema);
