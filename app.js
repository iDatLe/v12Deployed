var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    User	       = require("./models/user"),
    seedDB         = require("./seeds")

var commentRoutes    = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes      = require("./routes/index");

console.log(process.env.DATABASEURL);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASEURL, {useMongoClient: true});
// mongoose.connect("mongodb://dat:souperprivate1@ds155684.mlab.com:55684/datsyelpcamp", {useMongoClient: true});
process.env.databaseURL

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Smalls is still the cutest bunny",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
	next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds", campgroundRoutes); //by doing this, I can replace all the "/campgrounds" in the campgrounds.js file with just "/"

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("YelpCamp Server has started!");
})