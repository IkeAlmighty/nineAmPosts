import mongoose, { Schema, model, Document } from 'mongoose';

const dailySchema = new Schema({
    user_id: Schema.Types.ObjectId,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    boosts: [{user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, count: Number}]
},
{ timestamps: true })

const Daily = mongoose.model("Daily", dailySchema);
export default Daily;