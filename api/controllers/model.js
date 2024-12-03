const mongoose = require('mongoose');

const {Schema} = mongoose

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  value: { type: String, default: '' }
});

const surveySchema = Schema({
  userId: { type: String, required: true }, // To track the user taking the survey
  // directorate: {type: String, required: true},
  // teamCategory: {type: String, required: true},
  // Page 1: Focus on outcomes
  "Focus on Outcomes":   {
    type: [QuestionSchema],
    required: true
  },
  
  "Implement Effective Process":   {
    type: [QuestionSchema],
    required: true
  }
  ,
  "Be accountable and take ownership":   {
    type: [QuestionSchema],
    required: true
  } 
  , 
  "Be proactive":   {
    type: [QuestionSchema],
    required: true
  } 
  ,
  "Exceed Customer expectations":   {
    type: [QuestionSchema],
    required: true
  } 
  ,               

  // Timestamps
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});



const Survey = mongoose.model('Survey', surveySchema);

module.exports = { Survey };
