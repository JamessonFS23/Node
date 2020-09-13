module.exports= (app)=>{

    app.get('/users',(req, res)=>{

        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({
            users:[{
                name:'Jamesson',
                email:'Jfs@setPriority.com',
                id:1
            }]
        });

    });

    app.get('/users/admin',(req, res)=>{

        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({
            users:[]
        });

    });

}
///////////////////////////////////////////////////////////////////////////////////////////

//codigo sem o consign

/* let express = require('express');
let routes = express.Router();

//Pode se suprimido o users pois 
routes.get('/users',(req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({
        users:[{
            name:'Jamesson',
            email:'Jfs@setPriority.com',
            id:1
        }]
    });

})

routes.get('/users/admin',(req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({
        users:[]
    });

}) */

module.exports = routes;