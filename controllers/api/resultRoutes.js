const router = require('express').Router();
const { Result } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  console.log("post works");
  try {
    
    const newResult = await Result.create(req.body);
    
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/', withAuth, async (req, res) => {
  try {
    const resultData = await Result.destroy({
      /*where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },*/
    });

    if (!resultData) {
      res.status(404).json({ message: 'no information to delete' });
      return;
    }

    res.status(200).json(resultData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
