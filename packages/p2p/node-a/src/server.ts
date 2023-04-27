import * as dotenv from "dotenv"
dotenv.config()
import { AppConfig } from "./config.js"
import Fastify, { FastifyInstance } from "fastify"
const server: FastifyInstance = Fastify()

server.listen(AppConfig.app.port, "0.0.0.0", 100000, async () => {
  try {
    console.log(`node 1 started at ${AppConfig.app.domain}`)
  } catch (err) {
    console.log(err)
  }
})
