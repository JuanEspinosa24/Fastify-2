import Fastify from 'fastify'
import cors from "@fastify/cors"
import empleadoRoutes from './routes/empleadoRoutes.js'
import { connectDb } from './database.js'
import formbody from "@fastify/formbody"

connectDb()

const fastify = Fastify({
  logger: true
})

fastify.register(cors,{origin:"*"})

fastify.register(formbody);

//RUTAS

fastify.register(empleadoRoutes,{prefix:"/empleados"});

const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: "0.0.0.0" })
    console.log("Escuchandote por el puerto 4k")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

// ACOPLADO A FASTIFY :)

// TERMINADO PASADO A FASTIFY BACKEND 2 :)