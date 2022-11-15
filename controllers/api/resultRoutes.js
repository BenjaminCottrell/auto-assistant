const router = require('express').Router();
const { Result } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  console.log("post works");
  try {
    
    const newResult = await Result.create(req.body);

    console.log()
    
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/', withAuth, async (req, res) => {
  console.log("DELETE CALLED");
  try {
    const resultData = await Result.destroy({ truncate : true, cascade: false });

    res.status(200).json(resultData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
