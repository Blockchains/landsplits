# LandSplits.com

North American subdivision directory. Next.js App Router, ISR-ready city routes, forest and sand design system.

## Run

```bash
cd landsplits
npm install
npm run dev
```

Open http://localhost:3000

## Routes

- `/` national search hub
- `/states` and `/canada`
- `/california`, `/texas`, `/ontario`, and the other region hubs
- `/california/los-angeles` city guide, with the SB 9 alert
- `/california/los-angeles/cost` and the other topic pages
- `/check` address intake
- `/disclaimer`, `/editorial-policy`, `/data-sources`

Abbreviation redirects: `/ca/los-angeles` to `/california/los-angeles`.

City pages use `generateStaticParams` plus `dynamicParams` and a 7-day `revalidate` window. This prototype reads local data. Production should move that data to Postgres and keep the same route handlers.

California copy does not say a resident qualifies. It points eligible-path questions to SB9Split.com with UTM parameters.
