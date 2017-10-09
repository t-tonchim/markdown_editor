import { dialog } from 'electron'

export default function showExportPDFDialog() {
  return new Promise((resolve, reject) => {
    const file = dialog.showSaveDialog({
      title: 'export as PDF',
      filters: [
        { name: 'pdf file', extensions: ['pdf'] }
      ]
    })

    file ? resolve(file) : reject()
  })
}
