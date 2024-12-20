const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'please provide a username'],
      unique: true,
      minLength: [3, 'username must not be less than 3 characters'],
      maxLength: [30, 'username must not be more than 30 characters'],
    },
    email: {
      type: String,
      required: [true, 'please provide an email'],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'please provide a valid email',
      },
    },
    password: {
      type: String,
      required: [true, 'please provide a password'],
      minLength: [6, 'password must not be less than 6 characters'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedDate: {
      type: Date,
      default: null,
    },
    verificationToken: String,
    verificationTokenExpirationDate: Date,
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', UserSchema);
