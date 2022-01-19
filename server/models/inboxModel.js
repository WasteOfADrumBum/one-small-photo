const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const InboxSchema = new Schema(
  {
    contactInfo: {
      name: {
        first: { type: String, required: true, trim: true },
        last: { type: String, required: true, trim: true },
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: false,
        required: true,
        index: true,
        sparse: true,
      },
      phone: {
        type: Number,
        required: false,
        trim: true,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      },
      contactMethod: { type: String, required: true, trim: true },
      instagramHandle: { type: String, required: false, trim: true },
    },
    request: {
      comment: { type: String, required: false, trim: true },
      type: { type: String, required: true, trim: true },
      date: { type: Date, required: true, trim: true },
      budget: { type: Number, required: false, trim: true },
      location: { type: String, required: true, trim: true },
    },
    referral: { type: String, required: false, trim: true },
    read: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
)

module.exports = mongoose.model('Inbox', InboxSchema)
