import { ipcMain, BrowserWindow } from 'electron'
import EventEmitter from 'events'

class PDFWindow extends EventEmitter {
  constructor(text) {
    super(text)
    this.window = new BrowserWindow({ show: false })
    this.window.loadURL(`file://${__dirname}/../../pdf.html`)
    ipcMain.once('REQUEST_TEXT', e => {
      e.returnValue = text
    })
    ipcMain.once('RENDERED_CONTENTS', () => {
      this.emit('RENDERED_CONTENTS')
    })
  }

  generatePDF() {
    return new Promise((resolve, reject) => {
      this.window.webContents.printToPDF({}, (error, data) => {
        error ? reject(error) : resolve(data)
      })
    })
  }

  close() {
    this.window.close()
    this.window.on('closed', () => {
      this.window = null
    })
  }
}

export default function createPDFWindow(contents, fileManager){
  return new PDFWindow(contents, fileManager)
}
