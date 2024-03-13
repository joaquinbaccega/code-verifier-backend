import { type BasicResponse } from '../types';

export interface iHelloController {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  getMessage(name?: string): Promise<BasicResponse>
}
