import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const models = await openai.models.list();
console.log(models.data.map(model => model.id));

export default openai;