const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  company: String,
  eventType: {
    type: String,
    required: true,
  },
  dateType: {
    type: String,
    enum: ['single', 'range'],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  guestCount: {
    type: Number,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Event', eventSchema);

