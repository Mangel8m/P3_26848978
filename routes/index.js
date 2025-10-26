const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    data: {
      message: 'API P3_26848978 - Miguel Morales'
    }
  });
});

module.exports = router;
