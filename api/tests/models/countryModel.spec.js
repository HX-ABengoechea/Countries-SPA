const { Country, conn } = require("../../src/db");

describe("COUNTRY MODEL TESTING", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Country Model", () => {
    beforeEach(async () => {
      await Country.sync({ force: true });
    });
    it("It should create a new instance if all data provided", () => {
      Country.create({
        id: "PBA",
        name: "Prueba",
        flag: "url cualquiera",
        continent: "fs",
        capital: "sfdf",
        subregion: "sdf",
        area: 23,
        population: 43,
      })
        .then(() => done())
        .catch(() => done(new Error("No se respetan las validaciones.")));
    });
    it("It should not create a new instance if the information is incomplete.", (done) => {
      Country.create({
        // id: 1,
        name: "Prueba",
        // flag: "url cualquiera",
        // continent: "fs",
        capital: "sfdf",
        // subregion: "sdf",
        area: 23,
        population: 43,
      })
        .then(() => done(new Error("No se tendría que haber creado")))
        .catch(() => done());
    });
    it("It should not create a new instance if the validators are not correct", (done) => {
      Country.create({
        id: 654,
        name: "Prueba",
        flag: "url cualquiera",
        continent: "fs",
        capital: 45,
        subregion: "sdf",
        area: "dssd",
        population: "ksal",
      })
        .then(() => done(new Error("No se respetan las validaciones.")))
        .catch(() => done());
    });
  });
});
