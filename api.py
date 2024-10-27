import openai

openai.api_key = 'tu_api_key'

response = openai.Completion.create(
  engine="davinci-codex",
  prompt="¿Cómo te puedo ayudar hoy?",
  max_tokens=100
)

print(response.choices[0].text.strip())
