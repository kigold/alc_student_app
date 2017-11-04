const db = require('./database');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken')
const config = require('./database/config');

const salt = bcrypt.genSaltSync(10);
const Table = 'student';

function authUser(req, res, next) {
    var id = parseInt(req.params.id)  
    db.any('select * from '+Table+ ' where id = $1', id)
      .then(function (data) {
          //failed
          if(!data){
            res.status(400)
            .json({
            status: 'failed',
            message: 'failed authentication attempt'
            });
          }
          else{
              //failed
              if (!bcrypt.compareSync(req.body.password, data[0].password)){
                res.status(400)
                .json({
                status: 'failed',
                message: 'failed authentication attempt'
                }); 
              }
              //success auth
              else{
                const payload = {
                    user: {name: data.name, id: data.id}
                };
                var token = jwt.sign(payload, config.secret, {
                    //expiresInMinutes: 1440 // expires in 24 hours
                  });
                //success
                res.status(200)
                .json({
                status: 'success',
                data: data,
                message: 'Authenticate user',
                token: token
                });          
              }
          }        
          
      })
      .catch(function (err) {
          console.log(err);
        return next(err);
      });
  }

  module.exports = {
    authUser:authUser

}