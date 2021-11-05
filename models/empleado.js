var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var empleadoSchema = new Schema({
  nombre: { type: String },
  apellido: { type: String },
  fechaNacimiento: { type: Date }, //TODO:Modificar por fecha de nacimiento y calcular edad en la interfaz de usuario
  genero: { type: String },
  fechaIngreso: { type: Date },
  estrato: { type: Number },
}, { versionKey: false });

module.exports = mongoose.model("empleados", empleadoSchema);