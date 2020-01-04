const Counter = require('../../models/Counter');
const User = require('../../models/User');

module.exports = (app) => {
  // app.get('/api/counters', (req, res, next) => {
  //   Counter.find()
  //     .exec()
  //     .then((counter) => res.json(counter))
  //     .catch((err) => next(err));
  // });

  // app.post('/api/counters', function (req, res, next) {
  //   const counter = new Counter();

  //   counter.save()
  //     .then(() => res.json(counter))
  //     .catch((err) => next(err));
  // });
  app.post('api.account/signup', (req, res, next) => {
    const { body } = req;
    const {
      firstname,
      lastname,
      email,
      password
    } = body;

    if(!firstname){
      res.end({
        success: false,
        message: 'Error',
      })
    } 

    if(!lastname){
      res.end({
        success: false,
        message: 'Error',
      })
    } 

    if(!email){
      res.end({
        success: false,
        message: 'Error',
      })
    } 

    if(!password){
      res.end({
        success: false,
        message: 'Error',
      })
    } 

    email = email.toLowerCase();

    User.find({
      email: email;
    }, (err, previousUsers) => {
      if(err){
        res.end({
         success:false,
         message:'Error'});
       
      } else if (previousUsers.length > 0){
        res.end({
          success:false,
          message: 'Error'
        });
      }

      const newUser = new User();

      newUser.email = email;
      newUser.firstname = firstname;
      newUser.lastname = lastname;
      newUser.password = newUser.generateHash(password)
    });

  })
};
