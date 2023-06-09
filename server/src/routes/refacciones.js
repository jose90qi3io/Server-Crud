const express = require ("express");
const router =  express.Router()

//Imporando esquema de MongoDB Refacciones
const esquemaInventario = require ("../models/refacciones")

// @Alta de refacciones
// @Crear nuevo registro
// @route POST /API/post
// @acceso publico

router.post("/", async (req, res) => {

const newRefacciones = esquemaInventario(req.body);
newRefacciones
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});

// @Tener todos los registros
// @route GET /API/get
// @GET a todos las refacciones
// @acceso publico

router.get("/", (req, res) => {

    esquemaInventario
        .find({})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error})
        );
});

// @Tener registros especificos
// @route GET /API/get/:id
// @GET a refacciones especificas
// @acceso publico

router.get("/:id", (req, res) => {

    const { id } = req.params;
        esquemaInventario
            .findById(id)
            .then((data) => res.json(data))
            .catch((error) => res.json({message:"Refaccion no encontrada"})
        );
});
    
// @Actualizar registros especificos
// @route PUT /API/Altas/put/:id
// @PUT a refacciones especificas
// @acceso publico

router.put("/:id", (req, res) => {

    const { id } = req.params;
    const { descripcion, numParte, precio, cantidad, imagen } = req.body //Campos a actualizar
        esquemaInventario
            .updateOne({ _id: id }, { $set: { descripcion, numParte, precio, cantidad } })
            .then((data) => res.json(data))
            .catch((error) => res.json({message:"Refaccion no encontrada"})
        );
});

// @Actualizar registros especificos
// @route PUT /API/Altas/put/:id
// @PUT a refacciones especificas
// @acceso publico

router.delete("/:id", (req, res) => {

    const { id } = req.params;
        esquemaInventario
            .findByIdAndDelete({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({message:"Refaccion no encontrada"})
        );
});






//
// Exportacion del modulo router
module.exports = router
