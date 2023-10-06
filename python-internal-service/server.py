import requests

response = requests.post(
  'https://example.com',
  data='SUPER SENSITIVE DATA'
)
print(response.status_code)