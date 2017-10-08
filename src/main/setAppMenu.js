import { app, Menu, BrowserWindow } from 'electron'

export default function setUpMenu(options) {
  const template = [
    {
      label: 'File',
      submenu: [
        { label: 'Open', accelerator: 'CmdOrCtrl+O', click: () => options.openFile() },
        { label: 'Save', accelerator: 'CmdOrCtrl+S', click: () => options.saveFile() },
        { label: 'Save As...', click: () => options.saveAsNewFile() },
        { label: 'Export PDF', click: () => options.options.exportPDF() },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
        { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' },
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Dev Tools',
          accelerator: 'Alt+Command+I',
          click: () => BrowserWindow.getFocusedWindow().toggleDevTools()
        }
      ]
    }
  ]

  if (process.platform === 'darwin') {
    template.unshift(
      {
        label: 'MarkdownEditor',
        submenu: [
          { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() }
        ]
      }
    )
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}
