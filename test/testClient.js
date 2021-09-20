const DAO = require ('../redisDao');
let val =new DAO().getItem("key1");
console.log(val);

