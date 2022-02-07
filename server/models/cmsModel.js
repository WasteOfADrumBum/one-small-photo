const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
// Form Validation done in the modiel using required: true/false
const CMSSchema = new Schema(
  {
    imgSubject: { type: String, required: true, trim: true },
    imgCaption: { type: String, required: true, trim: true },
    imgCategory: { type: String, required: true, trim: true },
    imgOrientation: { type: String, required: true, trim: true },
    imgPolaroid: { type: Boolean, required: true, default: false },
    imgLandingPage: { type: Boolean, required: true, default: false },
    source: { type: String, required: true, trim: true },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
)

module.exports = mongoose.model('CMS', CMSSchema)
