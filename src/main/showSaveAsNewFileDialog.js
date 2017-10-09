import { dialog } from 'electron'

export default function showSaveAsNewFileDialog() {
  return new Promise((resolve, reject) => {
    const file = dialog.showSaveDialog({
      title: 'save',
      filters: [{ name: 'markdown file', extensions: ['md'] }]
    })

    file ? resolve(file) : reject()
  })
}
