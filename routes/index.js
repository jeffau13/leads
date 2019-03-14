var express = require('express');
var router = express.Router();
let landing = require('../controllers/landing');
let user = require('../controllers/user');


// get home page
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);

//get login/signup
router.get('/login', user.show_login);
router.get('/signup',user.show_signup);

router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);
//shows form for editing lead:
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
//submits form of lead edit:
router.post('/lead/:lead_id/edit', landing.edit_lead);
router.post('/lead/:lead_id/delete', landing.delete_lead);
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);
module.exports = router;
