const express = require('express');
const router = express.Router();

const formDataScema = require('../models/formData');

router.post('/form-data', async (req, res) => {
  try {
    const formData = new formDataScema(req.body);
    await formData.save();
    res.status(200).send(formData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router