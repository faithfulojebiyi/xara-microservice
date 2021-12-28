const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    trim: true,
    unique: true
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

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
