import { dialog } from 'electron'

export default function showOpenFileDialog() {
  return new Promise((resolve, reject) => {
    const files = dialog.showOpenDialog({
      title: 'Open',
      properties: ['openFile'],
      filters: [
        { name: 'markdown file', extensions: ['md'] }
      ]
    })

    files && files.length > 0 ? resolve(files[0]) : reject()
  })
}
