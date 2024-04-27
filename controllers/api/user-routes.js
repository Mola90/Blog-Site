const router = require('express').Router();
const {User, Comments, Blog} = require('../../models');


router.post('/sign-up', async (req,res) => {

    try { 
        
    
        
        const dbUserData = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });

        
    req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = dbUserData.id;
  
        res.status(200).json(dbUserData);
        console.log("Person has been createddddddddddddddddddddddddddddddddd");
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  
  });

  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      console.log(userData.password + "this is the console loggggggggggggggggggggg");

      
  
      if (!userData) {
        res.status(400).json({ message: 'No user found with this email address!' });
        return;
      }
  

      if (!(userData.password == req.body.password)) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        res.status(200).json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;
