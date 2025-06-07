# ReThink Mental Health Website

This is the codebase for the ReThink Mental Health and Wellness website, built with Next.js and Tailwind CSS.

## Image Requirements

For the website to display correctly, you'll need to add the following images:

### Partner Logos
Place these in `/public/images/partners/`:
- apa.png - American Psychiatric Association logo
- aacn.png - American Association of Critical-Care Nurses logo
- samhsa.png - Substance Abuse and Mental Health Services Administration logo
- nami.png - National Alliance on Mental Illness logo
- isnp.png - International Society for Nutritional Psychiatry logo
- jcaho.png - Joint Commission logo

### Blog Images
Place these in `/public/images/blog/`:
- ketamine-therapy.jpg - Image for the ketamine therapy article
- nutrition-mental-health.jpg - Image for the nutrition article
- anxiety-management.jpg - Image for the anxiety management article

### Office Images
Make sure you have:
- `/public/images/office/Entry-Logo.jpg` - Image of the office entry/logo

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
```

Then to start the production server:

```bash
npm start
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Firebase Contact Form Integration

This project includes a Firebase Cloud Functions integration for securely handling contact form submissions. When a user submits the contact form:

1. The form data is sent to a Firebase Cloud Function
2. The function validates the data
3. The submission is stored in a Firebase Firestore database
4. A success or error response is returned to the user

This approach keeps Firestore credentials secure while providing a reliable backend for form processing.

### Setting Up Firebase

See the detailed setup instructions in the [firebase/README.md](firebase/README.md) file.
