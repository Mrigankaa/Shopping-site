const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/",function(req,res)
{
    res.render("index");
});

router.get("/account",function(req,res)
{
    res.render("account");
});

router.get("/pages/men",function(req,res)
{
    res.render("pages/men");
});

router.get("/pages/women",function(req,res)
{
    res.render("pages/women");
});

router.get("/pages/accessories",function(req,res)
{
    res.render("pages/accessories");
});

router.get("/register",function(req,res)
{
    res.render("register",{
        user:req.body.name
    });
});

router.get("/login",function(req,res)
{
    res.render("login");
});

router.get("/admin/admin",function(req,res)
{
    res.render("admin/admin");
});

module.exports = router;