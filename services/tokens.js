const jwt = require('jsonwebtoken');

function createToken(){
   var user = {
   first_name: user.first_name,
   username: user.username,
   email: user.email
  };
  return token = jwt.sign(user,'tacos3000',{expiresIn: 60 * 60 * 24});

}

function verifyToken(){
  jwt.verify(token, 'tacos3000', function(err, user) {
    if (err) throw err;
}

module.exports={
  createToken,
  verifyToken
}
