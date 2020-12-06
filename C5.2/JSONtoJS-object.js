// Задание по преобразованию JSON в объект JS

const exampleJSON = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   const objectFromJson = JSON.parse(exampleJSON);
   
   console.log(objectFromJson);