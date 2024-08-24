const express = require('express');
const router = express.Router();
const { getAIResponse } = require('../services/aiService');

router.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await getAIResponse(message);
    res.json({ response });
});

module.exports = router;