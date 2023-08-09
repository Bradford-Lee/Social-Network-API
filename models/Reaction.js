const { Schema, Types} = require('mongoose');

// Schema to create Reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      require: true,
      maxlength: 280
    },
    username: {
      type: String,
      require: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function(time) {
        return new Date(time).toDateString()
      }
    },
  },
  {
    toJSON: {
      getters: true,
      virturals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;