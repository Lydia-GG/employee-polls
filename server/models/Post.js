const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      // type: String,
      type: mongoose.Schema.Types.String,
      ref: 'users',
      required: true,
    },
    categories: {
      type: Array,
      // type: mongoose.Schema.Types.Array,
      // ref: 'categories',
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('posts', PostSchema);
