var connection = require('../config/database.js');

module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "Username":req.body.uname,
        "password":req.body.pword,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}