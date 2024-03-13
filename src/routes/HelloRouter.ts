import express, { type Request, type Response } from 'express'
import { HelloController } from '../controller/HelloController'
import { LogInfo } from '../utils/logger'

// Router from express

const helloRouter = express.Router()

helloRouter.route('/').get(async (req: Request, res: Response) => {
  // Obtain a Query param
  let name: any = req?.query?.name
  LogInfo(`Query param: ${name}`)
  // Controller instance to execute
  const controller: HelloController = new HelloController()
  // Obtain the response from the controller
  const response = await controller.getMessage(name)
  //send to the client the response
  return res.send(response)
})

// Export the router
export default helloRouter