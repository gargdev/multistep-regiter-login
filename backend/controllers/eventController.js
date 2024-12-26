const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({
      success: true,
      data: newEvent,
      message: 'Event created successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create event',
      error: error.message,
    });
  }
};

