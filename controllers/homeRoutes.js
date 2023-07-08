const router = require('express').Router();
const { User } = require('../models/user');
// const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;