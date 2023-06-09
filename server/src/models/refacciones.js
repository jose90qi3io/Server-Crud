const mongoose = require('mongoose');

//Esquema de MongoDB Refacciones
const refaccionesShema = mongoose.Schema({ 

        nombre:{
            type:String,
            required: true,
        },
        descripcion: {
            type:String,
            required:true,
            minlength: 3,
            maxlength: 20,
        },
        numParte: {
            type:Number,
            required: true,
        },
        precio: {
            type:Number,
            required: true,
        },
        cantidad: {
            type:Number,
            required: true,
        },
        img: {
            type: String
        }
        
    }

)

module.exports = mongoose.model('pieza',refaccionesShema)
