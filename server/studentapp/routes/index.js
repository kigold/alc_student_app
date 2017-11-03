var express = require('express');
var router = express.Router();
const db = require('../database/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/students', db.getAllStudents);
router.get('/api/student/:id', db.getSingleStudent);
router.post('/api/createStudent', db.createStudent);
router.post('/api/updateStudent/:id', db.updateStudent);
router.delete('/api/student/:id', db.removeStudent);


router.get('/api/resource', db.getAllResource);
router.get('/api/resource/:id', db.getSingleResource);
router.post('/api/createResource', db.createResource);
router.post('/api/updateResource/:id', db.updateResource);
router.delete('/api/resource/:id', db.removeResource);



module.exports = router;
