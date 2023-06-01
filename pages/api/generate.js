import { Configuration, OpenAIApi } from 'openai';

const temperature = 0.7

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

const basePromptPrefix =
`Given the code of an endpoint, provide documentation for the API. Be as detailed as possible.
Endpoint code:

`
const generateAction = async (req, res) => {
    //first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}\n`,
        temperature: temperature,
        max_tokens: 250
    })


    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({
        output: basePromptOutput
    })
}

export default generateAction
