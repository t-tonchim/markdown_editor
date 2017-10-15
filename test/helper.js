import fs from 'fs'
const outputDir = 'reports'

export function capturePage(app, testName) {
  return app.browserWindow.capturePage().then(img => {
    fs.writeFileSync(`${outputDir}/caputure_${testName}.png`, img)
  })
}

export function reportLog(app, testName) {
  return Promise.all([
    app.client.getRenderProcessLogs(),
    app.client.getMainProcessLogs()
  ]).then(([renderLogs, mainLogs]) => {
    const logs = JSON.stringify({
      renderer: renderLogs,
      main: mainLogs
    })
    fs.writeFileSync(`${outputDir}/logs_${testName}.txt`, logs, 'utf8')
  })
}
