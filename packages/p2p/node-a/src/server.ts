import * as dotenv from "dotenv"
dotenv.config()
import { AppConfig } from "./config.js"
import Fastify, { FastifyInstance } from "fastify"
const app: FastifyInstance = Fastify()

app.listen({ port: AppConfig.app.port }, (err) => {
  if (err) throw err
  console.log(`node 1 started at ${AppConfig.app.port}`)
})
