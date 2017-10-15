import { Application } from 'spectron'
import electron from 'electron'
import path from 'path'

export default function createApplication(args) {
  return new Application({
    path: electron,
    args: [path.join(__dirname, '..')].concat(args)
  })
}
