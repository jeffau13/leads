let createError = require('http-errors');

exports.isLoggedIn = function (req,res,next){
    if(req.user)
        next();
    else
        next(createError(403,"Must be logged in to view this page"));
}

exports.hasAuth = function(req,res,next){
    if(req.user && req.user.is_admin == true)
        next();
    else
        next(createError(403,"Unauthorized"));
}