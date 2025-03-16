import mongoose, { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dailys: [{ type: Schema.Types.ObjectId, ref: 'Daily' }],
    boosts: Number
})

userSchema.pre('save', async function(next) {
    // Only hash the password if it's modified (or new)
    if (!this.isModified('password')) return next();

    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);

      // Hash password with the salt
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

  // Method to check password validity
  userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
  };

const User = mongoose.model("User", userSchema);
export default User;