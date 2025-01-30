const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  customName: String,
  topic: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('URL', urlSchema);
