/*Esta función maneja todas las validaciones del formulario.*/

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
    errors.name2 = "Sólo se aceptan letras";
  }
  if (!input.difficulty) {
    errors.difficulty = "Se requiere un puntaje";
  }
  if (input.difficulty <= 0 || input.difficulty > 5) {
    errors.difficulty2 = "La dificultad va de 1 a 5";
  }
  if (Math.floor(Number(input.difficulty)) !== Number(input.difficulty)) {
    errors.difficulty3 = "La dificultad tiene que ser un número entero";
  }
  if (!input.duration) {
    errors.duration = "Se require el tiempo de duración";
  }
  if (input.duration < 1) {
    errors.duration2 = "La cantidad de días no puede ser negativa o 0";
  }
  if (Math.floor(Number(input.duration)) !== Number(input.duration)) {
    errors.duration3 = "La duración tiene que ser un número entero";
  }
  if (!input.season || input.season === "Temporada") {
    errors.season = "Por favor, indique la temporada";
  }
  if (input.countries.length === 0) {
    errors.countries = "Por favor, indique al menos un país";
  }

  return errors;
}

module.exports = { validate };
