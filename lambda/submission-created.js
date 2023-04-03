
const sanityClient = require('@sanity/client')
const { uuid } = require('@sanity/uuid')
const client = sanityClient({
  projectId: 'gktzqe28',
  dataset: 'production',
  token: process.env.skSXerlMcMN35EHx36fo9JKbU9ks6P08RrQ9rF28Po2YfuyY3qPz2LcUD3nrs4oaWGoeq0K4sj6YXZERg8jHjyp6i3XqvNBOOr9mU4Stxk0jrxSoZl8v7XRqfX9a81JiFVT6A1rWI2qcU4urb6HlTtifzUuqb4dKN4AaQQ681UL3oNMJMR95
})

exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body)
  const result = await client.create({ 
    _id: `submission.${uuid()}`,
    _type: 'submission.form', ...payload })
  callback(null, {
    statusCode: 200
  })
}