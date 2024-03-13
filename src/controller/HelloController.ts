import { type BasicResponse } from './types'
import { type iHelloController } from './interfaces'
import { LogSuccess } from '../utils/logger'

export class HelloController implements iHelloController {
  public async getMessage (name?: string): Promise<BasicResponse> {
    LogSuccess('[api/hello] Get Request')

    return {
      message: `Hello, ${name || 'World'}!`
    }
  }
}
