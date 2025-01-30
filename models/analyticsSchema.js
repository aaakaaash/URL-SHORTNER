const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  urlId: { type: mongoose.Schema.Types.ObjectId, ref: 'URL', required: true }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  totalClicks: { type: Number, default: 0 },
  uniqueUsers: { type: Number, default: 0 },
  clicksByDate: [
    {
      date: { type: Date, required: true },
      clickCount: { type: Number, default: 0 },
    },
  ],
  osType: [
    {
      osName: { type: String, required: true },
      uniqueClicks: { type: Number, default: 0 },
      uniqueUsers: { type: Number, default: 0 },
    },
  ],
  deviceType: [
    {
      deviceName: { type: String, required: true },
      uniqueClicks: { type: Number, default: 0 },
      uniqueUsers: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model('Analytics', analyticsSchema);
