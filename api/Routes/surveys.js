const express = require("express")

const router = express.Router();

const Surveys = require("../controllers/survey")

const {createSurvey, getUserSurvey,getAllSurveys,updateSurvey} = Surveys

router.post("/create", createSurvey)
router.get("/", getUserSurvey)
router.get("/results", getAllSurveys)
router.put("/update", updateSurvey)


module.exports = router