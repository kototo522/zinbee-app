import { NextApiHandler } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const handler: NextApiHandler = async (req, res) => {
  try {
    if (!configuration.apiKey) {
      return res.status(500).send({ error: 'OpenAI API key not configured' })
    }

    if (req.method === 'POST') {
      const message = req.body.message

      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: message,
        temperature: 0.9,
        max_tokens: 100,
      })

      res.status(200).send(completion.data.choices[0].message)
    } else {
      res.status(405).send({ error: 'Method not allowed' })
    }
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).send({ error: `${e.message}` })
    } else {
      return res.status(500).send({ error: `${String(e)}` })
    }
  }
}

export default handler
