const fetch = require('node-fetch');


function robotsRule( req, res, next){
  fetch(`https://robohash.org/${this.props.userFormUsername}`)
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.robot = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { robotsRule };
