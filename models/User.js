import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    cash: {
      type: Number,
      required: [true, "Need to add cash"],
    },
    name: {
      type: String,
      required: [true, "Need to add name"],
      unique: true,
    },
    credit: {
      type: Number,
      required: [true, "Need to add credit"],
    },
  },
  {
    toJSON: {
      virtual: true,
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      virtual: true,
      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("User", UserSchema);