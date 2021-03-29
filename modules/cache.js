const NodeCache = require("node-cache")
const client = new NodeCache()

const cacheIntegration = (key, identificator, integration, expiration=60 * 30) => {
    const cachedValue = client.get(`${key}:${identificator}`)
    if (cachedValue) {
        console.log(`Integration ${key}:${identificator} cached`)
        return cachedValue
    } 
    const integrationResult = integration()
    client.set(`${key}:${identificator}`, integrationResult, expiration)
    return integrationResult
}

module.exports = cacheIntegration
