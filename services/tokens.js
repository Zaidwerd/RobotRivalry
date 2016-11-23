const jwt = require('jsonwebtoken');

function createToken(){
   var user = {
   name: user.name,
   username: user.username,
   admin: user.admin,
   _id: user._id.toString(),
   image: user.image
  };
  return token = jwt.sign(user,'tacos3000',{expiresIn: 60 * 60 * 24});

}


function verifyToken(){
  jwt.verify(token, 'tacos3000', function(err, user) {
    if (err) throw err;
}

