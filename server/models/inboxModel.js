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
      email: { type: String, required: true, trim: true },
    },
    request: {
      comment: { type: String, required: true, trim: true },
      type: { type: String, required: true, trim: true },
      date: { type: Date, required: false, trim: true },
    },
    read: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
)

module.exports = mongoose.model('Inbox', InboxSchema)
