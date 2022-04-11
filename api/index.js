//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//______________________________________________________________________________
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { apiCall } = require("./src/ApiData/ApiData");
//______________________________________________________________________________

/*Aquí sincronizamos los modelos con la base de datos.*/
conn
  .sync({ force: false })

  /*Una vez sincronizada, ejecutamos la función "apiCall" para guardar la información en la base de datos.*/
  .then(apiCall, console.log("¡Los países se cargaron exitosamente! :D"))

  /*Por último, activamos el puerto en el que se expedirá la información de nuestro back-end.*/
  .then(() => {
    server.listen(3001, () => {
      console.log("¡El servidor fue levantado en el puerto 3001! :D");
    });
  });
