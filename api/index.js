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

/*Sincronización con la base de datos.*/
conn
  .sync({ force: true })

  /*Se traen todos los países.*/
  .then(apiCall, console.log("¡Los países se cargaron exitosamente! :D"))

  /*El servidor se levanta en el puerto.*/
  .then(() => {
    server.listen(3001, () => {
      console.log("¡El servidor fue levantado en el puerto 3001! :D");
    });
  });
