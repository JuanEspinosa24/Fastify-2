// import { Router } from 'express';
// import { check } from 'express-validator';
import empleadoCtrl from '../controllers/empleado.controller.js';
// import { validFields } from '../middleware/Validfields.js';
import { seedDt } from '../seed/seedDb.js';

const empleadoRoutes = (fastify,opts,done) => {
    fastify.get("/seed",seedDt);

fastify.get('/',empleadoCtrl.listar);

fastify.get('/:id',empleadoCtrl.listById);

fastify.put('/:id',empleadoCtrl.actualizar);

fastify.delete('/:id',empleadoCtrl.eliminar);

fastify.post('/', {

    schema: {
        body:{
            type: "object",
            required: [ "nombres", "apellidos", "correo", "edad", "salario", "cargo" ],
            properties: {
                nombres: {
                    type: "string"
                },
                apellidos: {
                    type: "string"
                },
                correo: {
                    type: "string",
                    format: "email",
                },
                edad: {
                    type: "number",
                    minimum: 1,
                    maximum: 100,
                },
                salario: {
                    type: "number"
                },
                cargo: {
                    type: "string"
                },
            }
        }
    }

}, empleadoCtrl.guardar);
// VALIDAR ESTO DE ABAJO
// [
//     check("nombres","el campo nombres es obligatorio").trim().notEmpty(),
//     check("apellidos").optional().isLength
//     ({min: 4, max: 50}),
//     check("correo").isEmail(),
//     check("edad","el campo edad es obligatorio").notEmpty(),
//     check("salario","el campo salario es obligatorio").notEmpty(),
//     check("cargo","el campo cargo es obligatorio").notEmpty(),
// ],
// validFields,

done()

}

export default empleadoRoutes;

// ACOPLADO A FASTIFY :)