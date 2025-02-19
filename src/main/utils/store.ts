import Store from 'electron-store'

export const store = new Store({ encryptionKey: 'encrypt', clearInvalidConfig: true })
