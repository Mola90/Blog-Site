const User = require("./user");
const Comments = require("./comments");
const Blog = require("./blog");

Blog.hasMany(Comments, {
    foreignKey: "blog_comment",
    OnDelete: "CASCADE",
});

Comments.belongsTo(Blog, {
    foreignKey: "blog_comment"
});

User.hasMany(Blog, {
    foreignKey: "user_blog",
    OnDelete: "CASCADE"
});

Blog.belongsTo(User, {
    foreignKey: "user_blog"
});

User.hasMany(Comments, {
    foreignKey: "user_comments",
    OnDelete: "CASCADE"
});

Comments.belongsTo(User, {
    foreignKey: "user_comments",
});



module.exports= {User, Comments, Blog};

