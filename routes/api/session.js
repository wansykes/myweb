const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.send('Hello Updated Session!');
      } catch (err) {
        console.error(err.message);
        res.status(404).send('Mychat 404 Error');
      }
});

module.exports = router;