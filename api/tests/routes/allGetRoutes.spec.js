/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Activity, Country, conn } = require("../../src/db.js");

const agent = session(app);
const pais = {
  id: "PBA",
  name: "Prueba",
  flag: "url cualquiera",
  continent: "fs",
  capital: "sfdf",
  subregion: "sdf",
  area: 23,
  population: 43,
};
const actividad = {
  name: "Football",
  difficulty: 1,
  duration: 6,
  season: "Verano",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(
    async () =>
      await Country.sync({ force: true }).then(async () => Country.create(pais))
  );
  beforeEach(
    async () =>
      await Activity.sync({ force: true }).then(async () =>
        Activity.create(actividad)
      )
  );
  describe("GET", () => {
    it("Should get 200 in '/countries'.", () =>
      agent.get("/countries").expect(200));
    it("Should get 200 in '/countries?NAME=QUERY'.", () =>
      agent.get("/countries?name=Prueba").expect(200));
    it("Should get 200 in '/allact'.", () => agent.get("/allact").expect(200));
    it("Should get 200 in '/countries/ID'.", () =>
      agent.get("/countries/PBA").expect(200));
  });
});
