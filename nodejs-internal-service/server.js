import fetch from 'node-fetch'

const response = await fetch(
  'https://example.com', {
  method: 'POST',
  body: 'SUPER SENSITIVE DATA'
})
console.log(response.status)
