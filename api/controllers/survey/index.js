const { Survey } = require('../model');

// Create a new survey (initial save)
const createSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    const savedSurvey = await survey.save(); // Save the survey and get the saved object
    res.status(201).json({ message: 'Success', survey: savedSurvey }); // Include saved survey in response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update or save progress of a survey
const updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.body._id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });

    const updatedFields = req.body;

    // Track changes and log in AuditLog
    // for (let key in updatedFields) {
    //   if (survey[key] !== undefined && survey[key] !== updatedFields[key]) {
    //     await AuditLog.create({
    //       surveyId: survey._id,
    //       fieldName: key,
    //       oldValue: survey[key],
    //       newValue: updatedFields[key],
    //       modifiedBy: req.body.userId,
    //     });
    //   }
    // }

    Object.assign(survey, updatedFields);
    survey.updatedAt = new Date();
    await survey.save();
    res.json(survey);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a survey result by userId
const getUserSurvey = async (req, res) => {
  try {
    const survey = await Survey.findOne({ userId: req.query.userId });
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    
    res.status(200).json(survey);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all survey results
const getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
    createSurvey,
    getUserSurvey,
    getAllSurveys,
    updateSurvey
}