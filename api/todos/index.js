const { parse } = require('url')
const fetch = require('isomorphic-fetch')

const API_URL = 'https://jsonplaceholder.typicode.com/todos/'

module.exports = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    const { query } = parse(req.url, true)
    const { number } = query
    const url = `${API_URL}/${number}`

    const options = {}
    let response = await fetch(url, options)
    let responseJson = await response.json()
    res.end(JSON.stringify(responseJson))
  } catch (err) {
    console.log(err)
  }
}
