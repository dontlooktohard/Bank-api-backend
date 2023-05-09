import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  balance: { type: Number, default: 0 },
  credit: { type: Number, default: 0 },

  owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please add account owner"]
    },
    
});

export default mongoose.model("Account", AccountSchema);