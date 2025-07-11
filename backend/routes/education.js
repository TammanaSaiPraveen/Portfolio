const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ createdAt: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new education entry
router.post('/', async (req, res) => {
  const education = new Education({
    degree: req.body.degree,
    institution: req.body.institution,
    period: req.body.period,
    description: req.body.description,
    achievements: req.body.achievements
  });

  try {
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 