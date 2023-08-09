const { Schema, model } = require('mongoose');

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

// Schema to create a User model
const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [emailRegex, 'Please provide a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'Thought'
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
  // {
  //   userSchema.virtual('friendCount').get(function () {
  //     return this.friends.length;
  //   })
  // }
);

const User = model('user', userSchema);

module.exports = User;