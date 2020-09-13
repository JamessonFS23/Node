const express = require('express');
const { setPriority } = require('os');
const consign = require('consign');

let app = express();

consign().include('routes').into(app);

app.listen(3000,'127.0.0.1',()=>{

    console.log('Servidor Rodando !');

});
/////////////////////////////////////////////////////////////////////////////////////////

//codigo sem o consign
/* const express = require('express');
const { setPriority } = require('os');
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');

let app = express();

app.use(routesIndex);

app.use(routesUsers);


app.listen(3000,'127.0.0.1',()=>{

    console.log('Servidor Rodando !');

});
 */
//////////////////////////////////////////////////////////////////////////////////////////
//Codigo sem separação
/* const express = require('express');
const { setPriority } = require('os');

let app = express();

app.get('/',(req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Deu certo</h1>');

})

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

})

app.listen(3000,'127.0.0.1',()=>{

    console.log('Servidor Rodando !');

});
 */

////////////////////////////////////////////////////////////////////////////////////////
//Código sem o Express
/* const http = require('http');
const { setPriority } = require('os');

let server = http.createServer((req,res)=>{

    console.log('URL: ',req.url);
    console.log('METHOD: ',req.method);

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            res.end('<h1>Deu certo</h1>');
            break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify({
                users:[{
                    name:'Jamesson',
                    email:'Jfs@setPriority.com',
                    id:1
                }]
            }));
            break;
    
        default:
            break;
    }
});

server.listen(3000,'127.0.0.1',()=>{

    console.log('Servidor Rodando !');

}); */