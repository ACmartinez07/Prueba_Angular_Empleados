const empleado = require("../models/empleado.js");

//File: routes/tvshows.js
module.exports = function(app) {
  var Empleados = require("../models/empleado.js");

  //GET - consultar todos los empleados
  findAllEmpleados = function(req, res) {
    Empleados.find(function(err, empleado) {
      if (!err) {
        res.send(empleado);
      } else {
        console.log("ERROR: " + err);
      }
    });
  };

  //GET - consultar por el Id de empleado
  findById = function(req, res) {
    const id = req.params.id;
    Empleados.findById(id, function(err, empleado) {
      if (!err) {
        res.send(empleado);
      } else {
        console.log("ERROR: " + err);
      }
    });
  };

  //POST - agregar empleado
  addEmpleado = function(req, res) {
    console.log("POST");
    console.log(req.body);
    var empleado = new Empleados({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      genero: req.body.genero,
      fechaIngreso: req.body.fechaIngreso,
      estrato: req.body.estrato,
    });

    empleado.save(function(err) {
      if (!err) {
        console.log("Created");
      } else {
        console.log("ERROR: " + err);
      }
    });

    res.send(empleado);
  };

  //PUT - actualizar empleado
  updateEmpleado = function(req, res) {
    console.log("PUT");
    console.log(req.body);
    const id = req.params.id;
    const update = req.body;
    Empleados.findByIdAndUpdate(id, update, function(err, empleado) {
      if (!err) {
        res.send(empleado);
      } else {
        console.log("ERROR: " + err);
      }
    });
  };

  //DELETE - Borrar empleado
  deleteEmpleado = function(req, res) {
    const id = req.params.id;
    Empleados.findByIdAndRemove(id, function(err, empleado) {
      if (!err) {
        res.send(empleado);
      } else {
        console.log("ERROR: " + err);
      }
    });
  };

  //punto de entrada de los metodos
  app.get("/empleados", findAllEmpleados);
  app.get("/empleado/:id", findById);
  app.post("/empleado", addEmpleado);
  app.put("/empleado/:id", updateEmpleado);
  app.delete("/empleado/:id", deleteEmpleado);
};