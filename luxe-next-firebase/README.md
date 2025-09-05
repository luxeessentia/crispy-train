Luxe Essentials — Next.js + Firebase scaffold

Quick start (local):
1) cd luxe-next-firebase
2) npm install
3) copy .env.local.example -> .env.local and fill NEXT_PUBLIC_* client keys (Firebase web config + STRIPE publishable key)
   For local server API testing you can also add STRIPE_SECRET_KEY and FIREBASE_ADMIN_KEY to .env.local (but DO NOT commit them).
4) npm run dev
5) Open http://localhost:3000

Deployment:
- Push repository to GitHub.
- In Vercel Project Settings, add server env variables:
  STRIPE_SECRET_KEY, FIREBASE_ADMIN_KEY, SUCCESS_URL, CANCEL_URL
- Add NEXT_PUBLIC_* variables in Vercel as well for frontend.

Security:
- Never commit private keys to GitHub.
- Use Vercel environment variables for server secrets.
