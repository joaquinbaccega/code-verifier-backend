/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const LogSuccess = (message: string) => {
  console.log(`Succes: ${message}`)
}

export const LogError = (message: string) => {
  console.error(`Error: ${message}`)
}

export const LogInfo = (message: string) => {
  console.info(`Info: ${message}`)
}

export const LogWarning = (message: string) => {
  console.warn(`Warning: ${message}`)
}
