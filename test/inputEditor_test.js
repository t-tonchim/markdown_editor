import assert from 'assert'
import createApplication from './createApplication'
import EditorPage from './editor.page'
import { JSDOM } from 'jsdom'

describe('エディタ入力のテスト', function() {
  this.timeout(10000)
  let app

  beforeEach(() => {
    app = createApplication()
    return app.start()
  })

  afterEach(() => {
    return app.stop()
  })

  describe('エディタにMarkdownテキストを入力する', () => {
    it('HTMLがレンダリングされる', () => {
      const page = new EditorPage(app.client)
      return page.inputText('# h1見出し\n## h2見出し')
        .then(() => page.getRenderedHTML())
        .then(html => {
          const dom = new JSDOM(html)
          const h1 = dom.window.document.querySelector('h1')
          assert.equal(h1.textContent, 'h1見出し')
          const h2 = dom.window.document.querySelector('h2')
          assert.equal(h2.textContent, 'h2見出し')
        })
    })
  })

  describe('絵文字記法で入力する', () => {
    it('絵文字のPNG画像がレンダリングされる', () => {
      const page = new EditorPage(app.client)
      return page.inputText(':tada:')
        .then(() => page.findEmojiElement('tada'))
        .then(element => assert.equal(!!element))
    })
  })
})
