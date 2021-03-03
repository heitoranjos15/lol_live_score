const NodeCache = require("node-cache")
const client = new NodeCache()

const cacheIntegration = async (key, identificator, integration, expiration=60 * 30) => {
    const cachedValue = client.get(`${key}:${identificator}`)
    if (cachedValue) return cachedValue
    const integrationResult = await integration()
    client.set(`${key}:${identificator}`, integrationResult, expiration)
    return integrationResult
}

module.exports = cacheIntegration
