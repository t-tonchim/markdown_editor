import assert from 'assert'
import createApplication from './createApplication'

describe('アプリケーションの起動テスト', function() {
  let app
  this.timeout(10000)
  beforeEach(() => {
    app = createApplication()
    return app.start()
  })
  afterEach(() => {
    return app.stop()
  })
  it('アプリケーションを起動するとウィンドウが１つ表示される', function() {
    console.log(app.client)
    return app.client.getWindowCount()
      .then(count => assert.equal(count, 1))
  })
})
