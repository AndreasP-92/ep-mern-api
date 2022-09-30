const express = require('express');
const router = express.Router();

// GET hello world
router.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

module.exports = router;

export {};
