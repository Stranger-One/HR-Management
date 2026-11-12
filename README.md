This is a Next.js job and HR management application with MongoDB authentication, Cloudinary uploads, email delivery, Gemini summaries, and an embedded Sanity Studio.

## Environment

Copy `.env.example` to `.env.local` and replace every placeholder before starting the application.

Required server variables:

- `MONGODB_URI` for the MongoDB connection.
- `JWT_SECRET` for authentication cookies and middleware verification.
- `EMAIL_USER` and `EMAIL_PASS` for Gmail SMTP. Use a Gmail app password.
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` for server uploads.
- `GEMINI_API_KEY` for employee performance summaries.

Required public variables:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` for browser image uploads.
- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` for Sanity content and Studio.
- `NEXT_PUBLIC_SANITY_API_VERSION` is optional and defaults to `2025-09-24`.
- `NEXT_PUBLIC_API_URL` is optional and defaults to `http://localhost:3000`.

Do not commit `.env.local` or real credentials.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The production checks are:

```bash
npm run lint
npx --no-install tsc --noEmit
npm run build
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
