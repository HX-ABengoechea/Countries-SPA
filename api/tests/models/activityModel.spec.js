const { Activity, conn } = require("../../src/db");

describe("ACTIVITY MODEL TESTING", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Activity Model", () => {
    beforeEach(async () => {
      await Activity.sync({ force: true });
    });
    it("It should create a new instance if all data provided", () => {
      Activity.create({
        name: "Football",
        difficulty: 1,
        duration: 6,
        season: "Verano",
      })
        .then(() => done())
        .catch(() => done(new Error("No se respetan las validaciones.")));
    });
    it("It should not create a new instance if the information is incomplete.", (done) => {
      Activity.create({
        name: "Football",
        // difficulty: 4,
        duration: 6,
        // season: "Verano"
      })
        .then(() => done(new Error("No se tendría que haber creado")))
        .catch(() => done());
    });
    it("It should not create a new instance if the validators are not correct", (done) => {
      Activity.create({
        name: "Football",
        difficulty: 9,
        duration: 6,
        season: "verano",
      })
        .then(() => done(new Error("No se respetan las validaciones.")))
        .catch(() => done());
    });
  });
});
