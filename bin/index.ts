import os from 'os'
import cluster from 'cluster'
import app from '../app'
import log from '../src/utils/log'

const clusterSize = os.cpus().length

const start = () => {
  // since v16.0.0 `isMaster` was deprecated, use `isPrimary` instead
  if (!cluster.isMaster) {
    app()
  } else {
    for (let i = 0; i < clusterSize; i++) {
      cluster.fork()
    }
    cluster.on('exit', (worker) =>
      log.info({ msg: `Worker ${worker.id} has exitted.` })
    )
  }
}

export default start()
