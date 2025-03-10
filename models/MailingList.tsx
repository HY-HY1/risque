import mongoose from 'mongoose';

const MailingListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MailingList = mongoose.models.MailingList || mongoose.model('MailingList', MailingListSchema);

export default MailingList;
