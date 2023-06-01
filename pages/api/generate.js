import { Configuration, OpenAIApi } from 'openai';

temperature = 0.7

const configuration = new Configuration({
    apiKey: process.env.OPENAIAPI
})

const openai = new OpenAIApi(Configuration);

const basePromptPrefix = ""
const generateAction = async (req, res) => {
    //first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}`,
        temperature: temperature,
        max_tokens: 250
    })

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({
        output: basePromptOutput
    })
}

export default generateAction
