import { response } from "../helpers/Response.js";
import { empleadoModel } from "../models/empleado.model.js";
import { data } from "./data.js";

export const seedDt=async(req,reply)=>{
    try {
        await empleadoModel.deleteMany();
        const empleados=await empleadoModel.create(data)
        response(reply,201,true,empleados,"seed ejecutado");
    } catch (error) {
        response(reply,500,false,"",error.message)
    }
}

// ACOPLADOS A FASTIFY :)