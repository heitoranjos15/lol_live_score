const { mergeTypes } = require('merge-graphql-schemas')

const mergeSchemas = () => {
    const files = glob.sync('**/*.gql')

    const schema = files.map(file=>
        readFileSync(join(process.cwd(), file), 'utf8'))
    return mergeTypes(schema)
}

const schema = mergeSchemas()

module.exports = schema