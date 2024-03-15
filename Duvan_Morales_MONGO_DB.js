db.createCollection('users');

db.users.insertMany(
[
    {
        name:'Duvan',
        lastname: 'Morales',
        email:'morales@gmail.com',
        city:'Medellin',
        contry: 'Colombia',
        salaty: 5500,
        age:18,
        height:183,
        weight:86
    },
    {
        name:'Daniel',
        lastname: 'Hurtado',
        email:'daniel@gmail.com',
        city:'titiribi',
        contry: 'venezuela',
        salaty:50000 ,
        age: 19,
        height:174,
        weight:58
    },
    {
        "name": "Juan",
        "lastname": "Martinez",
        "email": "juan.martinez@example.com",
        "city": "Barquisimeto",
        "country": "Venezuela",
        "salary": 55000,
        "age": 30,
        "height": 180,
        "weight": 75
    },
    {
        "name": "Ana",
        "lastname": "Gonzalez",
        "email": "ana.gonzalez@example.com",
        "city": "Maracaibo",
        "country": "Venezuela",
        "salary": 48000,
        "age": 28,
        "height": 165,
        "weight": 55
    },
    {
        "name": "Pedro",
        "lastname": "Ramirez",
        "email": "pedro.ramirez@example.com",
        "city": "Valencia",
        "country": "Venezuela",
        "salary": 62000,
        "age": 35,
        "height": 175,
        "weight": 80
    },
    {
        "name": "Sofia",
        "lastname": "Fernandez",
        "email": "sofia.fernandez@example.com",
        "city": "Caracas",
        "country": "Venezuela",
        "salary": 58000,
        "age": 27,
        "height": 168,
        "weight": 63
    },
    {
        "name": "Luis",
        "lastname": "Perez",
        "email": "luis.perez@example.com",
        "city": "Merida",
        "country": "Venezuela",
        "salary": 53000,
        "age": 32,
        "height": 172,
        "weight": 70
    },
    {
        "name": "Laura",
        "lastname": "Sanchez",
        "email": "laura.sanchez@example.com",
        "city": "Maracay",
        "country": "Venezuela",
        "salary": 60000,
        "age": 29,
        "height": 170,
        "weight": 58
    },
    {
        "name": "Carlos",
        "lastname": "Gutierrez",
        "email": "carlos.gutierrez@example.com",
        "city": "Carupano",
        "country": "Venezuela",
        "salary": 51000,
        "age": 31,
        "height": 178,
        "weight": 73
    },
    {
        "name": "Mariana",
        "lastname": "Torres",
        "email": "mariana.torres@example.com",
        "city": "San Cristobal",
        "country": "Venezuela",
        "salary": 57000,
        "age": 26,
        "height": 163,
        "weight": 52
    },
    {
        "name": "Gabriel",
        "lastname": "Diaz",
        "email": "gabriel.diaz@example.com",
        "city": "Puerto La Cruz",
        "country": "Venezuela",
        "salary": 54000,
        "age": 33,
        "height": 176,
        "weight": 78
    },
    {
        "name": "Valeria",
        "lastname": "Alvarez",
        "email": "valeria.alvarez@example.com",
        "city": "Barcelona",
        "country": "Venezuela",
        "salary": 59000,
        "age": 34,
        "height": 167,
        "weight": 65
    }
]); 

db.users.insertMany(
    [
        {
            "name": "camilo",
            "lastname": "Martinez",
            "email": "juan.martinez@example.com",
            "city": "Madrid",
            "country": "España",
            "salary": 55000,
            "age": 30,
            "height": 180,
            "weight": 75
        },
        {
            "name": "zhalet",
            "lastname": "Gonzalez",
            "email": "ana.gonzalez@example.com",
            "city": "Miami",
            "country": "Estados unidos",
            "salary": 48000,
            "age": 28,
            "height": 165,
            "weight": 55
        },
        {
            "name": "Sarah",
            "lastname": "Johnson",
            "email": "sarah.johnson@example.com",
            "city": "New York",
            "country": "United States",
            "salary": 70000,
            "age": 36,
            "height": 168,
            "weight": 68
        },
        {
            "name": "Camille",
            "lastname": "Martin",
            "email": "camille.martin@example.com",
            "city": "Paris",
            "country": "France",
            "salary": 58000,
            "age": 38,
            "height": 168,
            "weight": 65,
            
        },
        {
            "name": "Alexander",
            "lastname": "Wong",
            "email": "alexander.wong@example.com",
            "city": "Vancouver",
            "country": "Canada",
            "salary": 65000,
            "age": 35,
            "height": 178,
            "weight": 75
        },
        {
            "name": "Emma",
            "lastname": "Chen",
            "email": "emma.chen@example.com",
            "city": "Toronto",
            "country": "Canada",
            "salary": 62000,
            "age": 29,
            "height": 163,
            "weight": 58
        },
        {
            "name": "Lucas",
            "lastname": "Santos",
            "email": "lucas.santos@example.com",
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "salary": 58000,
            "age": 28,
            "height": 175,
            "weight": 70
        },
        {
            "name": "Gabriela",
            "lastname": "Silva",
            "email": "gabriela.silva@example.com",
            "city": "São Paulo",
            "country": "Brazil",
            "salary": 55000,
            "age": 32,
            "height": 170,
            "weight": 63
        },
        {
            "name": "Sofía",
            "lastname": "Gómez",
            "email": "sofia.gomez@example.com",
            "city": "Buenos Aires",
            "country": "Argentina",
            "salary": 51000,
            "age": 33,
            "height": 165,
            "weight": 60
        },
        {
            "name": "Martín",
            "lastname": "López",
            "email": "martin.lopez@example.com",
            "city": "Córdoba",
            "country": "Argentina",
            "salary": 49000,
            "age": 29,
            "height": 178,
            "weight": 75
        },
        {
            "name": "Camila",
            "lastname": "Rodríguez",
            "email": "camila.rodriguez@example.com",
            "city": "Santiago",
            "country": "Chile",
            "salary": 48000,
            "age": 30,
            "height": 163,
            "weight": 58
        },
        {
            "name": "Diego",
            "lastname": "Fernández",
            "email": "diego.fernandez@example.com",
            "city": "Valparaíso",
            "country": "Chile",
            "salary": 52000,
            "age": 35,
            "height": 175,
            "weight": 70
        },
        {
            "name": "Hannah",
            "lastname": "Schmidt",
            "email": "hannah.schmidt@example.com",
            "city": "Berlin",
            "country": "Germany",
            "salary": 58000,
            "age": 31,
            "height": 170,
            "weight": 65
        },
        {
            "name": "Max",
            "lastname": "Müller",
            "email": "max.mueller@example.com",
            "city": "Hamburg",
            "country": "Germany",
            "salary": 60000,
            "age": 36,
            "height": 180,
            "weight": 80
        },
        {
            "name": "Laura",
            "lastname": "González",
            "email": "laura.gonzalez@example.com",
            "city": "Bogotá",
            "country": "Colombia",
            "salary": 47000,
            "age": 28,
            "height": 160,
            "weight": 55
        },
        {
            "name": "Andrés",
            "lastname": "Martínez",
            "email": "andres.martinez@example.com",
            "city": "Medellín",
            "country": "Colombia",
            "salary": 49000,
            "age": 32,
            "height": 175,
            "weight": 70
        },
        {
            "name": "Priya",
            "lastname": "Patel",
            "email": "priya.patel@example.com",
            "city": "Mumbai",
            "country": "India",
            "salary": 45000,
            "age": 27,
            "height": 160,
            "weight": 55
        },
        {
            "name": "Raj",
            "lastname": "Kumar",
            "email": "raj.kumar@example.com",
            "city": "New Delhi",
            "country": "India",
            "salary": 51000,
            "age": 34,
            "height": 175,
            "weight": 68
        }        
    ]
);

db.users.insertOne( {
    "name": "Valeria",
    "lastname": "Alvarez",
    "email": "valeria.alvarez@example.com",
    "city": "London",
    "country": "Estados unidos",
    "salary": 59000,
    "age": 34,
    "height": 167,
    "weight": 65
});

db.users.insertMany([
    {
        "name": "Daniel",
        "lastname": "Martinez",
        "email": "daniel.martinez@example.com",
        "city": "Berlin",
        "country": "Alemania",
        "salary": 62000,
        "age": 36,
        "height": 180,
        "weight": 80
    },
    {
        "name": "Anna",
        "lastname": "Johnson",
        "email": "anna.johnson@example.com",
        "city": "Sydney",
        "country": "Australia",
        "salary": 58000,
        "age": 32,
        "height": 168,
        "weight": 65
    },
    {
        "name": "John",
        "lastname": "Smith",
        "email": "john.smith@example.com",
        "city": "Los Angeles",
        "country": "United States",
        "salary": 65000,
        "age": 40,
        "height": 175,
        "weight": 75
    },
    {
        "name": "Maria",
        "lastname": "Gonzalez",
        "email": "maria.gonzalez@example.com",
        "city": "New York",
        "country": "Estados Unidos",
        "salary": 55000,
        "age": 28,
        "height": 163,
        "weight": 60
    },
    {
        "name": "Valeria",
        "lastname": "Alvarez",
        "email": "valeria.alvarez@example.com",
        "city": "London",
        "country": "Estados unidos",
        "salary": 60000,
        "age": 30,
        "height": 170,
        "weight": 70
    }
]);

db.users.insertOne( {
    "name": "isablea",
    "lastname": "Alvarez",
    "email": "valeria.alvarez@example.com",
    "city": "madrid",
    "country": "España",
    "salary": 40000,
    "age": 34,
    "height": 167,
    "weight": 65
});

db.users.insertOne( {
    "name": "Duvan",
    "lastname": "Alvarez",
    "email": "valeria.alvarez@example.com",
    "city": "Londres",
    "country": "Australia",
    "salary": 40000,
    "age": 31,
    "height": 167,
    "weight": 71
});

db.users.insertOne( {
    "name": "Duvan",
    "lastname": "Alvarez",
    "email": "",
    "city": "Londres",
    "country": "Australia",
    "salary": 40000,
    "age": 31,
    "height": 167,
    "weight": 71
});

//Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({
    "age": {
        "$gt": 18
    }
});

//Obtener todos los usuarios que sean de Londres o de París
db.users.find({city:{$in:["London","Paris"]}});


//Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({salary:{$gt: 2000},age:{$lt : 30}});

//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({country: {$eq:'España'},salary:{$gt:3000}});

//Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({$and: [{age:{$gt:25}},{age:{$lt:35}}]});

//Obtener a todos los usuarios que no sean de Estados Unidos
db.users.find({country:{$ne: "estados unidos"}});

//Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años
db.users.find({
    $or:[
        {city: "Londres",salary:{$gt : 2500}},
        {city: "Londres",age:{$gt : 30}}
    ]
});


//Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({
    $and :[
        {country: 'Australia'},
        {weight: {$gt: 70}}
    ]
});

//Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({
    $and:[
        {country:{$ne: 'Londres'}},
        {country:{$ne: 'Paris'}}
    ]
});

//Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
    $or: [
        {salary : { $it: 2000}},
        {age: {$gt: 40}}
    ]
});

//Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({
    $or:[
        {country: "Canada",salary: {$gt: 4000}},
        {country: "Canada",height: {$gt:180 }}
    ]
});

//Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({
    $and:[
        {country: "Colombia"},
        {age: {$gte: 20, $lte: 30}}
    ]
});

//Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({
    "email": {
        "$exists": false
    }
});


//Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({
    $and:[
        {country: {$eq: "Francia"}},
        {salary: {$gte: 3000, $lte:5000}}
    ]
});

//Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras
db.users.find({
    country: 'Colombia',
    $or: [
        {weight: {$lt: 60}},
        {weight: {$gt: 70}}
    ]
});

//Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({
    $or: [
        {age:{$lt:25},country: {$eq: 'Argentina'}},
        {age:{$lt:25},country: {$eq: 'Chile'}}
    ]
});

//Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes

db.users.find({
    $and: [
        {country:{$ne: "España"}},
        {country:{$ne: "Mexico"}},
        {salary: {$lt: 3000}}
    ]
});

//Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({
    country: 'Alemania',
    $or:[
        {salary: {$lt: 4000}},
        {age: {$gt: 35}}
    ]
});

//Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({
    $and: [
        {country: {$ne: "Colombia"}},
        {height: {$lt: 170}}
    ]
});

//Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({
    $and: [
        {country: "India"},
        {salary: {$exists : false}}
    ]
});

//usuarios que no sean de colombia
db.users.find({
    country:{$ne: "Colombia"}
});


db.users.deleteMany({
    age: 22
});

