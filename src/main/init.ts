import debug from 'electron-debug'
import log from 'electron-log/main'
import { join } from 'path'
import dayjs from 'dayjs'
import util from 'node:util'
import unhandled from 'electron-unhandled'

debug()
log.initialize()
log.transports.file.resolvePathFn = (variables) => {
  return join(variables.libraryDefaultDir, `logs/${dayjs().format('YYYY-MM-DD')}.log`)
}
log.transports.file.maxSize = 0
log.transports.file.format = ({ data, level, message }) => {
  const text = util.format(...data)
  return [dayjs(message.date).format('YYYY-MM-DD HH:mm:ss'), `[${level}]`, `{${btoa(text)}}`]
}


unhandled({
  logger: (error) => log.error(error),
  showDialog: true
})
