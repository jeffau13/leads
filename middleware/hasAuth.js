let createError = require('http-errors');

exports.isLoggedIn = function (req,res,next){
    if(req.user)
        next();
    else
        next(createError(403,"Must be logged in to view this page"));
}