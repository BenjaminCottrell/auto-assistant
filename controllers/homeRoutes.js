const router = require('express').Router();
const { Favorite, User, Result } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all favorites and JOIN with user data
    const favoriteData = await Favorite.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const favorites = favoriteData.map((favorite) => favorite.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('welcome', { 
      favorites, 
      logged_in: req.session.logged_in,
      name: req.session.name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search', withAuth, async (req, res) => {
  res.render('search', {
    logged_in: req.session.logged_in,
    name: req.session.name,
  });
});

router.get('/results', withAuth, async (req, res) => {
  try {
    // Get all results
    const resultData = await Result.findAll();

    // Serialize data so the template can read it
    const results = resultData.map((result) => result.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('results', { 
      results, 
      logged_in: req.session.logged_in,
      name: req.session.name,
      id: req.session.id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/favorites', async (req, res) => {
  try {
    // Get all favorites
    const favoriteData = await Favorite.findAll({
      where: {
        user_id: req.session.user_id,
      }
  });

    // Serialize data so the template can read it
    const favorites = favoriteData.map((favorite) => favorite.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('favorites', { 
      favorites, 
      logged_in: req.session.logged_in,
      name: req.session.name,
      id: req.session.id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Favorite }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/search');
    return;
  }

  res.render('login');
});

module.exports = router;
