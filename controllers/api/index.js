const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const resultRoutes = require('./resultRoutes');

router.use('/users', userRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/result', resultRoutes);

module.exports = router;
