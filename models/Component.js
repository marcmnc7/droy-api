const mongoose = require('mongoose')
const { Schema } = mongoose
const { String } = Schema.Types

const componentSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  defaultConfig: {
    type: Object,
    required: true
  },
  belongsToStyle: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    name: String,
    height: String
  },
  componentType: {
    type: String,
    required: true,
    trim: true
  },
},
{
  timestamps: true
})

const Component = mongoose.model('Component', componentSchema)
module.exports = Component
