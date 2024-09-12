
[test.webm](https://github.com/user-attachments/assets/ceb82bb3-19f6-47db-a79a-3cd7520b052d)
<h1 align="center">Next.js Gemini AI Mandarin-English Chatbot</h1>
<p align="center">
  An AI-powered chatbot app built with Next.js, Google Gemini, and Vercel AI SDK. This app is specifically designed for users struggling with learning Mandarin or translating Mandarin text into English.
</p>




## Use Cases

This chatbot is designed to help users who are learning Mandarin or translating Mandarin text into English. Key use cases include:

- **Learning Mandarin:** Users can ask the chatbot to translate sentences or phrases from Mandarin to English, improving their understanding of the language.
- **Job Application Translation:** For job seekers in Taiwan using the 104 job website, users can copy job descriptions in Mandarin and paste them into the chatbot to receive an English translation, making it easier to understand and apply for jobs.

## Model Providers

This template uses Google Gemini's `models/gemini-1.0-pro-001` as the default model. However, the [Vercel AI SDK](https://sdk.vercel.ai/docs) allows you to switch between LLM providers such as [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), [Hugging Face](https://huggingface.co), or use custom AI models through [LangChain](https://js.langchain.com).


## Running Locally

You'll need to set up environment variables as defined in `.env.example`. We recommend using [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables), but you can also use a `.env` file.

> **Important:** Do not commit your `.env` file, as it contains sensitive data that could allow unauthorized access to your Google Cloud and authentication provider accounts.

### Steps:

```bash
npm i
npm run dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Authors

This project was developed by Jason Jonarto, with inspiration from the Vercel and Next.js team. 

This version focuses on your chatbot's purpose of helping with Mandarin-English translations, specifically for learners and job seekers using Mandarin websites like 104.

This is a forked repo from [vercel-labs/gemini-chatbot](https://github.com/vercel-labs/gemini-chatbot)
