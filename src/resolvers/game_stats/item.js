const config = require('../../../configs')
const { data: itemsDescription } = require('../../../items_mock/items.json')

const url = itemId => `${config.ITEMS_URL}/${itemId}.png`

const name = itemId => itemsDescription[itemId].name

const description = itemId => itemsDescription[itemId].description

const itemId = itemId => itemId

module.exports = {
    url,
    name,
    description,
    itemId
}
