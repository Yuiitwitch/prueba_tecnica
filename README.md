# prueba_tecnica

Prueba tecnica de backend realizada para empresa.

TECNOLOGIAS UTILIZADAS

Express

MySQL

Sequelize

DEPENDENCIAS UTILIZADAS

colors

cors

express

morgan

mysql2

nodemon

sequelize

winston ( para el archivo de logs )

CREACION DE BASE DE DATOS

Pasos a seguir para instalar la base de datos.

1. npm init (para crear el archivo de dependencias

2. npm i express ( para instalar la dependencia de express)

3. npm i nodemon (para poder tener el servidor up continuamente a cada cambio)

4. En el archivo packeage.json , añadiremos en scripts los siguientes campos
5. 
  "start": "node index.js",
  
    "dev": "nodemon index.js"
    
A continuación crearemos el archivo index.js y añadiremos los requiere , de todas las dependencias que hemos instalado.

Una vez creado el archivo de index y configurado.

Instalaremos sequelize (utlizaremos el comando npm i sequelize) para poder crear toda la estructura de archivos

Views - donde ira nuestro archivo de empoints

seeders - sera nuestro almacen donde iran todos los datos de nuestras tablas de la base de datos.
models

migrations - es el archivo el cual utilizaremos para migrar las tablas (sin datos).

Y finalmente los Controllers , donde estaran las funciones de nuestros endpoints. (CRUD)


Tambien crearemos el archivo de winston.js y configuraremos para que podamos tener una archivo de logs.

NOTA*: siempre recordar crear un archivo .gitignore para eligir que archivos no subir a tu repositorio.







