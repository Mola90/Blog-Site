const router = require('express').Router();
const {User, Comments, Blog} = require('../models');



router.get('/', async (req, res) => {
    try { 

        var existingBlogs = await Blog.findAll({include:{model:Comments}});

        const serialisedBlogs = existingBlogs.map(blog => blog.get({ plain: true }));
        console.log("this is the raw log" + existingBlogs);

        const allBlogs = serialisedBlogs[0];
        console.log(serialisedBlogs[0].comments);
        console.log(serialisedBlogs);

      res.render('homepage',{serialisedBlogs});
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
    
  });

  router.get('/dashboard', async (req, res) => {
    const existingBlog = await Blog.findAll({include:{model:Comments}});

    const userSerialisedBlog = existingBlog.map(blog => blog.get({ plain: true }));

    res.render('dashboard',{userSerialisedBlog});
  });

  module.exports = router;