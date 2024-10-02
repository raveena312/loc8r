var express = require('express'); 
var router = express.Router();
var ctrlLocations = require('../controllers/locations'); 
var ctrlOthers = require('../controllers/others');
var ctrlMain = require('../controllers/main');

router.get('/', ctrlLocations.homelist); 
router.get('/locations', ctrlLocations.locationInfo); 
router.get('/location1', ctrlLocations.locationInfo1); 
router.get('/location2', ctrlLocations.locationInfo2);
router.get('/location/review/new', ctrlLocations.addReview); 
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlMain.signin); 
router.get('/review', ctrlMain.review); 
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'register' });
});

module.exports = router;
