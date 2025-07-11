const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new experience
router.post('/', async (req, res) => {
  const experience = new Experience({
    title: req.body.title,
    company: req.body.company,
    period: req.body.period,
    description: req.body.description,
    achievements: req.body.achievements
  });

  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 