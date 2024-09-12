import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          Mandarin Translator Bot
        </h1>
        <p className="leading-normal text-zinc-900">
          This is an open source AI-powered Mandarin translation app built with{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://ai.google.dev">
            Google Gemini
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          It leverages{' '}
          <ExternalLink href="https://vercel.com/blog/ai-sdk-3-generative-ui">
            React Server Components
          </ExternalLink>{' '}
          and real-time AI capabilities to provide accurate translations between
          Mandarin and English. The state of the UI is kept in sync with your
          translation requests to ensure a smooth and responsive user
          experience.
        </p>
        <p className="leading-normal text-zinc-900">
          Use this app to translate text and learn Mandarin with the help of
          AI-driven, dynamic responses that adjust based on your interactions
          with the bot.
        </p>
      </div>
    </div>
  )
}
