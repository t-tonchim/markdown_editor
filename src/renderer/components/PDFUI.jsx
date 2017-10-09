import React from 'react'
import Previewer from './Previewer'
import { ipcRenderer } from 'electron'

export default class PDFUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  componentDidMount(){
    const text = ipcRenderer.sendSync('REQUEST_TEXT')
    this.setState({ text })
  }

  componentDidUpdate(){
    this.syncImageRenderered().then(() => {
      ipcRenderer.send('RENDERED_CONTENTS')
    })
  }

  syncImageRenderered() {
    const images = [...document.querySelectorAll('img')]
    const loadingImages = images.filter(img => !img.complete)
    if(loadingImages.length === 0) {
      return Promise.resolve()
    }
    return Promise.all(loadingImages.map(img =>
      new Promise(resolve => img.onload = () => resolve())))
  }

  render() {
    return <Previewer value={this.state.text} />
  }
}

