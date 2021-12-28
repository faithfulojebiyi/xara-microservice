const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category'
  },
  ancestorsIds: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category'
    }
  ],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => Date.now()
  }
})

const Template = mongoose.model('Template', templateSchema)

module.exports = Template
