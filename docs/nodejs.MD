NodeJS
===

Documentacion sobre nodejs y dependencias.

## Propiedades y funcionalidades

### Puerto

Se puede configurar un puerto para trabajar en local y en desarrollo de la siguiente forma.-

```js
const port = process.env.port || 3000;
```

## Dependencias

### Body Parser

Lo instalamos con el siguiente comando

```
npm i -S body-parser
```

Hace la función de un middleware entre nodejs y express, lee la entrada de un formulario y la almacena como un objeto javascript accesible a traves de req.body, su configuración es la siguiente.-

```js
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
```

[Mas información](https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4)

### Express

Lo instalamos con el siguiente comando.-

```js
npm i -S express
```

Es un framework que nos permite crear un servidor web.

### Nodemon

Lo instalamos con el siguiente comando.-

```js
npm i -D nodemon
```

Nos sirve para no estar deteniendo el servidor cada vez que realicemos un cambio, se configura en el archivo package.json.-

```js
"scripts": {
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```