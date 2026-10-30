# arrak-portfolio

My personal portfolio at [arrak.dev](https://www.arrak.dev): a one-page site built with Next.js, React and Tailwind CSS.

## Stack

- Next.js 16 (pages router, ISR)
- React 19
- Tailwind CSS 4
- Hygraph (GraphQL) for the experience timeline
- Vercel hosting, Analytics and Speed Insights
- Phosphor Icons

## Getting started

Requires Node 24 (see `.nvmrc`).

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Add environment variables** in `.env.local`:

   ```sh
   GRAPH_CMS_MASTER=<your Hygraph content API endpoint>
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

4. **Build for production:**

   ```sh
   npm run build
   npm start
   ```

## Editing content

| What                           | Where                                                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Experience timeline            | Hygraph `employments` (the page regenerates at most once per hour)                                                      |
| Selected work and side project | `components/utils/work.utils.js`                                                                                        |
| Skills                         | `components/utils/skills.utils.js`                                                                                      |
| Resume button                  | `components/utils/resume.utils.js`: set `RESUME_PDF_URL` to a PDF in `public/` to switch it from LinkedIn to a download |

## Deployment

Pushes to `main` deploy to [Vercel](https://vercel.com/).

## License

MIT
