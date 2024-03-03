# Simple AI Chatbot Application 
Built with Next.js, Vercel AI SDK, Shadcn, and OpenAI

<img width="1280" alt="chatbot_thumbnail" src="https://github.com/hyamero/chatbot/assets/78056869/7d0feda6-78cd-4ebc-ba31-213a96d8700b">

---

## Getting Started

First, [clone the repository](https://github.com/hyamero/chatbot) and download it locally.

```sh
$ git clone https://github.com/hyamero/chatbot
```

Next, you'll need to set up environment variables in your repo's `.env.local` file. To start using the project, you'll just need to add your OpenAI API key, which you can find [here](https://platform.openai.com/api-keys).

```sh
OPENAI_API_KEY="xxxxxx"
```

Next, install the required packages using your preferred package manager (e.g. pnpm). Once that's done, run the development server:

```sh
1. pnpm i
2. pnpm run dev
```

Backend logic lives in `app/api/chat/route.ts`. From here, you can change the prompt and model, or add other modules and logic. This project uses `gpt-3.5-turbo` as the default.

---

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
