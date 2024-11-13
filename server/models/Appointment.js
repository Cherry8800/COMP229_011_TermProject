const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  status: String,
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
