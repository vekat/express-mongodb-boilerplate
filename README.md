# Express/MongoDB (Mongoose) Boilerplate
Node.js application boilerplate based on [Express.js](http://expressjs.com/) and [mongoose](http://mongoosejs.com/) for rapid application development.

## Dependencies
* [bluebird](https://www.npmjs.com/package/bluebird) Full featured Promises/A+ implementation with exceptionally good performance;
* [body-parser](https://www.npmjs.com/package/body-parser) Node.js body parsing middleware;
* [express](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework;
* [method-override](https://www.npmjs.com/package/method-override) Override HTTP verbs;
* [mongoose](https://www.npmjs.com/package/mongoose) Mongoose MongoDB ODM;
* [morgan](https://www.npmjs.com/package/morgan) HTTP request logger middleware for node.js;

## **TO-DO**
* Work with views [using EJS](http://www.embeddedjs.com);
* Custom Routes;
* Custom Endpoints/Middlewares;
* Custom Schemas;
* User authentication [using passport](https://www.npmjs.com/package/passport);
* Work with ES6 [using babel](https://babeljs.io/);

## Exercise
Create a *one page application* to **list, create, edit and delete** users with: name, details, username, password and a enum called status (ACTIVATED and DEACTIVATED). The app need be authenticated (to make this [use passport](https://www.npmjs.com/package/passport)) and the password saved encrypted with a bcrypt module (find one in npm). The application needs to encrypt password in a login route, to get username and password informations to verify in mongodb database; if the users cannot make a login, this page needs print a error message in view as: "Username or password wrong. Try again." and if user exists in mongodb you can show a dashboard page to make a CRUD.

use this example to make a fields validation logic:

``` javascript
//validation middleware (ES6)
let mvalidate = (req, res, next) => {
    if(!params) return next(new Error('Error message'));
    return next();
};
//validation before postOne middleware
router.use('/example').post(mvalidate, (req, res) => {
    //code here...
});

...

 //validation middleware (ES5)
var mvalidate = function(req, res, next){
     if(!params) return next(new Error('Error message'));
      return next();
};
//validation before postOne middleware
router.use('/example').post(mvalidate, function(req, res){
    //code here...
});
```
