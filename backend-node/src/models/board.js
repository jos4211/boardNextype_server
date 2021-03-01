import mongoose, { Schema } from 'mongoose';

// const post = new Schema({

// });

const BoardSchema = new Schema({
  title: String,
  createdDate: String,
  writer: String,
  content: String,
  views: {
    type: String,
    default: '0',
  },
});

BoardSchema.statics.findByAllPost = function () {
  return this.find({});
};

BoardSchema.statics.findByPostId = function (postId) {
  return this.findOne({ _id: postId });
};

const Boards = mongoose.model('Boards', BoardSchema);
export default Boards;
