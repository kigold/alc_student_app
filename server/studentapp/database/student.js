const db = require('../database');

const Table = 'student';
function getAllStudents(req, res, next) {
    db.any('select * from '+Table)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL students'
          });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function getSingleStudent(req, res, next) {
    var id = parseInt(req.params.id)
    db.any('select * from '+Table+ ' where id = $1', id)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved single students'
          });
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  function createStudent(req, res, next) {
  //req.body.age = parseInt(req.body.age);
  req.body.status = "active";
  db.none('insert into '+Table+'(name, gender, dob, occupation, status)' +
      'values(${name}, ${gender}, ${dob}, ${occupation}, ${status})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one Student'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateStudent(req, res, next) {
    var parameters = [req.body.name, req.body.gender, req.body.dob,
        req.body.occupation, req.body.status,  parseInt(req.params.id)]
    db.none('update '+Table+' set name=$1, gender=$2, dob=$3, occupation=$4, status=$5 where id=$6',
      parameters)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated Stdent'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function removeStudent(req, res, next) {
    var id = parseInt(req.params.id);
    db.result('delete from '+Table+' where id = $1', id)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} student`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
  }
  
  


  module.exports = {
      getAllStudents:getAllStudents,
      getSingleStudent:getSingleStudent,
      createStudent:createStudent,
      updateStudent:updateStudent,
      removeStudent:removeStudent

  }